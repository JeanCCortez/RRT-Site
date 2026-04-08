import numpy as np
import matplotlib.pyplot as plt

# ==============================================================================
# RRT CONFIGURATION: GW170817 MULTI-MESSENGER CONSISTENCY AUDIT
# Goal: Validating RRT Causal Viscosity against known local Binary Neutron Star (BNS) mergers.
# Logic: Proving that Phase 3 effects are below the detection threshold for z < 0.01
# while predicting measurable divergence for cosmological distances (z > 0.5).
# ==============================================================================

def run_gw170817_consistency_test():
    """
    Executes a safety audit using the benchmark event GW170817.
    Compares observed electromagnetic (EM) distance vs. Gravitational Wave (GW) 
    distance under the RRT Viscous Vacuum model.
    """
    print("="*80)
    print("REFERENTIAL RELATIVITY THEORY (RRT): GW170817 CONSISTENCY AUDIT")
    print("Target: BNS Merger GW170817 / Host Galaxy NGC 4993")
    print("="*80)
    
    # 1. Observational Ground Truth (Benchmark)
    # Source: Abbott et al. 2017 (LIGO/Virgo) and Cantiello et al. 2018 (Optical)
    target_name = "GW170817 / NGC 4993"
    ra_event = 197.45   # Right Ascension (Degrees)
    dec_event = -23.38  # Declination (Degrees)
    z_event = 0.0099    # Observed Redshift
    
    dist_em_obs = 40.7  # Observed Optical Distance (Mpc)
    dist_gw_obs = 40.0  # Observed Gravitational Distance (LIGO) (Mpc)
    ligo_uncertainty = 8.0 # Statistical error margin (Mpc)
    
    # 2. RRT Calibrated Parameters (From Vol. IV)
    CORTEZ_AXIS_RA = 168.0
    CORTEZ_AXIS_DEC = -7.0
    XI_VISCOSITY = 0.308  # Causal Coupling Constant
    ANISOTROPY_A = 0.45   # Dipole Amplitude
    
    # 3. Geometric Projection (Mapping the event onto the Causal Flow)
    # Convert to radians for trigonometric computation
    r_ev = np.radians([ra_event, dec_event])
    r_ax = np.radians([CORTEZ_AXIS_RA, CORTEZ_AXIS_DEC])
    
    # Cosine Theta: Angular separation from the Causal Viscosity Axis
    cos_theta = (np.sin(r_ev[1]) * np.sin(r_ax[1]) + 
                 np.cos(r_ev[1]) * np.cos(r_ax[1]) * np.cos(r_ev[0] - r_ax[0]))
    
    angular_dist_deg = np.degrees(np.arccos(cos_theta))
    
    print(f"Event Location:  RA {ra_event:.2f}°, Dec {dec_event:.2f}°")
    print(f"Alignment:       {angular_dist_deg:.2f}° from Cortez Axis (CosTheta: {cos_theta:.2f})")
    
    if cos_theta > 0.5:
        print("Status:          High Alignment Zone (High theoretical drag potential).")
    else:
        print("Status:          Safe Zone (Low theoretical drag potential).")

    # 4. RRT Mathematical Prediction
    # Formula: D_GW_pred = D_EM * exp( (Xi/2) * z * (1 + A * cos_theta) )
    # At low redshift (z=0.009), the causal drag is mathematically suppressed.
    damping_term = (XI_VISCOSITY / 2) * z_event * (1 + ANISOTROPY_A * cos_theta)
    rrt_factor = np.exp(damping_term)
    
    predicted_gw_dist = dist_em_obs * rrt_factor
    predicted_divergence_pct = (rrt_factor - 1) * 100
    
    print("-" * 50)
    print(f"Real Optical Distance (EM):      {dist_em_obs:.2f} Mpc")
    print(f"LIGO Measured Distance (GW):     {dist_gw_obs:.2f} +/- {ligo_uncertainty} Mpc")
    print(f"RRT Predicted GW Distance:       {predicted_gw_dist:.2f} Mpc")
    print(f"Predicted RRT Bias:              +{predicted_divergence_pct:.2f}% (Viscous Damping)")
    
    # 5. Consistency Verdict
    upper_limit_ligo = dist_gw_obs + ligo_uncertainty 
    
    print("-" * 50)
    if predicted_gw_dist <= upper_limit_ligo:
        print("✅ VERDICT: ABSOLUTE SUCCESS.")
        print(f"RRT prediction ({predicted_gw_dist:.2f} Mpc) is fully consistent with GW170817 data.")
        print("Conclusion: Vacuum viscosity at z=0.01 is below the LIGO noise floor,")
        print("validating the theory against local multi-messenger constraints.")
    else:
        print("❌ VERDICT: FAILURE.")
        print("RRT predicted excessive damping for a local event.")

    # 6. Cosmological Extrapolation (The "Hunt" for O4/LISA)
    # Projecting the effect for z=1.0 where RRT is the dominant signal.
    print("=" * 80)
    print("RRT COSMOLOGICAL PREDICTION (FALSIFIABILITY TARGET)")
    print("Projection for high-redshift mergers (z=1.0) within the Cortez Corridor:")
    z_future = 1.0
    future_term = (XI_VISCOSITY / 2) * z_future * (1 + ANISOTROPY_A * cos_theta)
    future_factor = np.exp(future_term)
    future_divergence = (future_factor - 1) * 100
    
    print(f"Expected Luminosity Distance Divergence: +{future_divergence:.2f}%")
    print("RRT Prediction: A merger at 3000 Mpc will appear as 3600+ Mpc in GW detectors.")
    print("This spatial-dependent bias is the definitive test for RRT.")
    print("="*80)

if __name__ == "__main__":
    run_gw170817_consistency_test()


# ==============================================================================
# JSON EXPORT FOR VISUALIZATION
# ==============================================================================
def export_gw170817_data():
    """Generates synthetic GW170817 consistency audit data for 3D visualization."""
    import json
    
    # Reference event
    target_data = {
        "name": "GW170817 / NGC 4993",
        "ra": 197.45,
        "dec": -23.38,
        "z": 0.0099,
        "dist_em_obs": 40.7,
        "dist_gw_obs": 40.0,
        "uncertainty": 8.0
    }
    
    # Synthetic time-evolution (10 events sampling z-space from local to cosmological)
    events = []
    z_values = np.linspace(0.005, 1.5, 10)
    
    for i, z in enumerate(z_values):
        # RRT prediction: distance distortion grows with z and alignment to causal axis
        theta_deg = np.random.rand() * 180  # Random angular separation
        cos_theta = np.cos(np.radians(theta_deg))
        
        # Aberration effect: proportional to z and cos(theta) alignment
        dist_rrt_predicted = 432 * z / (0.7 + 0.3 * (1 + z)) * (1 + 0.1 * cos_theta)
        dist_lcdm_baseline = 432 * z / (0.7 + 0.3 * (1 + z))
        divergence_pct = 100 * (dist_rrt_predicted - dist_lcdm_baseline) / dist_lcdm_baseline
        
        events.append({
            "z": float(z),
            "dist_rrt": float(dist_rrt_predicted),
            "dist_lcdm": float(dist_lcdm_baseline),
            "divergence_pct": float(divergence_pct),
            "theta_deg": float(theta_deg)
        })
    
    # Save to public data directory
    import os
    output_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'data', 'gw170817.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    export_data = {
        "target_event": target_data,
        "synthetic_events": events,
        "metadata": {
            "test": "GW170817 Consistency Audit",
            "dataset": "Multi-messenger gravitational wave events",
            "objects": "10 synthetic GW events (z: 0.005-1.5)",
            "significance": "Phase aberration vs cosmological distance"
        }
    }
    
    with open(output_path, 'w') as f:
        json.dump(export_data, f, indent=2)
    
    print(f"✓ GW170817 data exported to {output_path}")

# Generate export on script execution
try:
    export_gw170817_data()
except Exception as e:
    print(f"Warning: Could not export GW170817 data: {e}")