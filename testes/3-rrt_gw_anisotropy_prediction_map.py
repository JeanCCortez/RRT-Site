import numpy as np
import matplotlib.pyplot as plt

# ==============================================================================
# RRT CONFIGURATION: GRAVITATIONAL WAVE ANISOTROPY PREDICTION MAP
# Target: Luminosity Distance Divergence (z=0.5)
# Goal: Mapping the "Tired Wave" effect across the celestial sphere.
# Logic: Red zones indicate where RRT predicts the LIGO will overestimate 
# distances due to vacuum viscosity (Causal Fatigue).
# ==============================================================================

def generate_rrt_prediction_map():
    """
    Generates a Mollweide projection map showing the predicted divergence 
    between Gravitational and Optical distances.
    """
    print("="*80)
    print("RRT PREDICTION ENGINE: GENERATING CELESTIAL ANOMALY MAP")
    print("Reference Redshift: z = 0.5")
    print("="*80)
    
    # 1. Celestial Grid Setup (Radians for Mollweide)
    ra = np.linspace(-np.pi, np.pi, 360)
    dec = np.linspace(-np.pi/2, np.pi/2, 180)
    RA, DEC = np.meshgrid(ra, dec)
    
    # 2. Cortez Axis Definition (The Dipole of Maximum Viscosity)
    # RA 168 degrees = 2.932 radians | Dec -7 degrees = -0.122 radians
    ra_axis = np.radians(168) 
    dec_axis = np.radians(-7)
    
    # 3. Angular Distance Calculation (Spherical Law of Cosines)
    cos_theta = (np.sin(DEC) * np.sin(dec_axis) + 
                 np.cos(DEC) * np.cos(dec_axis) * np.cos(RA - ra_axis))
    
    # 4. RRT Prediction Model (Vol IV Formula)
    # Divergence (%) = [ exp( K * (1 + A*cos_theta) ) - 1 ] * 100
    # K: Redshift-dependent scaling factor
    K_z05 = 0.15 
    A_anisotropy = 0.45
    
    divergence = (np.exp(K_z05 * (1 + A_anisotropy * cos_theta)) - 1) * 100
    
    # 5. Visualization (Mollweide Projection)
    plt.figure(figsize=(12, 8))
    ax = plt.subplot(111, projection="mollweide")
    
    # Heatmap: 'RdYlBu_r' -> Red (High Deviation), Blue (Agreement with GR)
    mesh = ax.pcolormesh(RA, DEC, divergence, cmap='RdYlBu_r', shading='auto')
    
    # Primary Axis Marker (Viscosity Peak)
    ax.scatter(ra_axis, dec_axis, marker='*', s=600, color='gold', edgecolor='black', 
               label='Cortez Axis (Max Viscosity Peak)\nRA 168°, Dec -7°', zorder=10)
    
    # Counter-Axis Marker (Einsteinian Convergence)
    ra_anti = ra_axis - np.pi
    dec_anti = -dec_axis
    ax.scatter(ra_anti, dec_anti, marker='o', s=200, color='cyan', edgecolor='black', 
               label='Anti-Axis (GR/Einsteinian Regime)', zorder=10)

    # Academic Labeling and Aesthetics
    plt.title("RRT PREDICTION: GW Luminosity Distance Anomaly (z=0.5)\n"
              "Red: LIGO Overestimates Distance (Vacuum Fatigue) | Blue: GR Consistency", 
              fontsize=13, pad=25, fontweight='bold')
    
    # Colorbar configuration
    cbar = plt.colorbar(mesh, orientation='horizontal', pad=0.08, aspect=50)
    cbar.set_label('Expected Divergence: (D_GW - D_EM) / D_EM [%]', fontsize=11)
    
    plt.grid(True, alpha=0.3, linestyle='--')
    plt.legend(loc='upper left', fontsize=10, framealpha=0.9)
    
    # Output
    output_name = 'rrt_gw_prediction_map_en.png'
    plt.savefig(output_name, dpi=300, bbox_inches='tight')
    print(f"-> Prediction map saved as '{output_name}'.")
    print("="*80)
    plt.show()

if __name__ == "__main__":
    generate_rrt_prediction_map()


# ==============================================================================
# JSON EXPORT FOR VISUALIZATION
# ==============================================================================
def export_gwmap_data():
    """Generates synthetic GW anisotropy prediction map data for 3D visualization."""
    import json
    
    # Celestial Grid (subsampled for JSON efficiency: every 4th point)
    ra = np.linspace(-np.pi, np.pi, 360)
    dec = np.linspace(-np.pi/2, np.pi/2, 180)
    RA, DEC = np.meshgrid(ra[::4], dec[::4])  # Subsample for performance
    
    # Cortez Axis
    ra_axis = np.radians(168) 
    dec_axis = np.radians(-7)
    
    # Compute divergence
    cos_theta = (np.sin(DEC) * np.sin(dec_axis) + 
                 np.cos(DEC) * np.cos(dec_axis) * np.cos(RA - ra_axis))
    
    K_z05 = 0.15 
    A_anisotropy = 0.45
    divergence = (np.exp(K_z05 * (1 + A_anisotropy * cos_theta)) - 1) * 100
    
    # Flatten to array of points
    points = []
    for i in range(RA.shape[0]):
        for j in range(RA.shape[1]):
            points.append({
                "ra": float(RA[i, j]),
                "dec": float(DEC[i, j]),
                "divergence": float(divergence[i, j])
            })
    
    # Save to public data directory
    import os
    output_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'data', 'gwmap.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    export_data = {
        "map_type": "Mollweide Projection",
        "redshift": 0.5,
        "cortez_axis": {
            "ra_deg": 168,
            "dec_deg": -7,
            "marker": "star"
        },
        "anti_axis": {
            "ra_deg": -12,
            "dec_deg": 7,
            "marker": "circle"
        },
        "grid_points": points,
        "metadata": {
            "test": "GW Anisotropy Prediction Map",
            "dataset": "Celestial divergence field (subsampled)",
            "objects": "360 × 180 grid points (every 4th sampled)",
            "significance": "2D divergence topology"
        }
    }
    
    with open(output_path, 'w') as f:
        json.dump(export_data, f, indent=2)
    
    print(f"✓ GW Anisotropy map exported to {output_path}")

# Generate export on script execution
try:
    export_gwmap_data()
except Exception as e:
    print(f"Warning: Could not export GW Anisotropy map data: {e}")