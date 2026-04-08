import Layout from '../components/Layout';
import Latex from 'react-latex-next';
import ImagePanel from '../components/ImagePanel';

export default function Volume2() {
  return (
    <Layout>
      <main className="container page-transition theme-vol2">
        {/* Title */}
        <div className="volume-header">
          <h1 className="hero-title">Volume II</h1>
          <h2 className="vol-subtitle">Field Formalism and the Dynamics of Open Quantum Systems</h2>
        </div>

        <ImagePanel src="/imagens/2.png" alt="Volume II Presentation" caption="Referential Relativity Theory: Field Formalism and Quantum Dynamics" themeColor="var(--theme-color)" />

        {/* Abstract */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Abstract</h2>
          <p className="text-justify leading-relaxed text-lg">
            This paper presents the complete mathematical derivations of the <strong>Referential Relativity Theory</strong> (RRT). The formulation is constructed from a covariant action that unifies Einstein-Hilbert geometry with two fundamental temporal fields: the scalar causal flux field <Latex>{String.raw`$\Phi$`}</Latex> and the anisotropic vector field <Latex>{String.raw`$T_\mu$`}</Latex>, which respectively define cosmic acceleration and temporal directionality. We introduce the physical couplings <Latex>{String.raw`$\xi_\Phi = \delta = 0.3084$`}</Latex> (resolving the <Latex>{String.raw`$H_0$`}</Latex> tension) and <Latex>{String.raw`$\xi_T$`}</Latex> (related to the critical acceleration <Latex>{String.raw`$a_0 = 1.2001 \times 10^{-10}$ m/s²`}</Latex>).
          </p>
          <p className="text-justify leading-relaxed text-lg mt-4">
            We derive the total Lagrangian structure, the modified field equations, the Baryonic Neutrality Principle (BNP) in its final form, and the system-reservoir formalism for the vector field <Latex>{String.raw`$T_\mu$`}</Latex> with a gradient (<Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>) and <strong>cosmic precession</strong> (<Latex>{String.raw`$\theta_T(z) = \theta_0 + \omega_p z$`}</Latex>). The formulation maintains local compatibility with General Relativity via the BNP, while establishing that the anisotropy—validated through spectroscopic auditing—points to an anti-relation of <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> in the critical stratum of SDSS DR16Q (<Latex>{String.raw`$z \approx 1.7$`}</Latex>), confirming the precession of the causal frame at large scales. Furthermore, we introduce the <strong>Baryonic Shielding Function</strong> <Latex>{String.raw`$K(\rho) = 1 - \tanh(\rho/\rho_{crit})$`}</Latex>, which governs the phase transition between the stagnation regime (General Relativity) and the viscous regime (RRT). This function reconciles the null results observed in local experiments (LAGEOS-2, CERN) with deep dynamical anomalies. We demonstrate that vacuum viscosity acts as a <strong>Cortez Refractive Index</strong> <Latex>{String.raw`$\eta_C(z)$`}</Latex>, inducing a phase delay in both light and gravitational waves. This prediction is validated through the auditing of the CASTLES catalog, where RRT provides Theoretical Refractive Convergence without dark matter halos, and predicts a measurable gravitational phase delay for GWTC events.
          </p>
        </section>

        {/* Technical Glossary */}
        <section className="mb-10 bg-gray-50 p-6 rounded-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Technical Glossary (RRT Field Dynamics)</h2>
          <ul className="space-y-4 text-lg">
            <li><strong className="text-blue-900">Baryonic Shielding Function <Latex>{String.raw`$K(\rho)$`}</Latex>:</strong> A sigmoid scaling mechanism that exponentially suppresses temporal viscosity in high-density regions, recovering local Lorentzian invariance.</li>
            <li><strong className="text-blue-900">Causal Stratigraphy Metric (CSM):</strong> An anisotropic redefinition of the spacetime interval that incorporates a linear phase gradient <Latex>{String.raw`$D_0 \cdot z$`}</Latex> and precessional trajectories.</li>
            <li><strong className="text-blue-900">Cortez Refractive Index <Latex>{String.raw`$\eta_C(z)$`}</Latex>:</strong> A redshift-dependent function describing the quantum vacuum as a dissipative medium that induces phase delays in metric and electromagnetic information.</li>
            <li><strong className="text-blue-900">Causal Reservoir:</strong> The conceptual framework treating the fundamental vector field <Latex>{String.raw`$T_\mu$`}</Latex> as a non-stationary thermodynamic bath that couples to quantum observables.</li>
            <li><strong className="text-blue-900">System-Reservoir Formalism:</strong> The mathematical derivation using Feynman-Vernon functionals to describe how "Pure Duration" causes decoherence and dissipation in baryonic matter.</li>
            <li><strong className="text-blue-900">Causal Stagnation:</strong> The physical state of Phase 1/2 regimes where high gravitational potentials "lock" the temporal tensor, rendering cosmological anisotropy undetectable localy.</li>
          </ul>
        </section>

        {/* BLOCK 1: Lagrangian Formulation and Fundamental Couplings of RRT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">
            BLOCK 1: Lagrangian Formulation and Fundamental Couplings of RRT
          </h2>

          {/* Section 1 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">1. Derivation of the Total Referential Relativity Action</h3>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation 1: Covariant Action and Field Equations</h4>
            <p className="mb-4 text-lg">The total RRT action synthesizes geometry, matter, and causally active temporal fields, with separate couplings for scalar (acceleration) and vector (anisotropy) effects.</p>
            
            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 1: Total Covariant Action</h5>
            <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ S_{\text{RRT}} = \int d^4x \sqrt{-g} \left[ \frac{R}{16\pi G} + \mathcal{L}_\Phi + \mathcal{L}_T + \mathcal{L}_{\text{mat}} + \mathcal{L}_{\text{int}} \right] \tag{1.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 2: Lagrangian Components (Updated)</h5>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li><strong>Einstein-Hilbert (Geometry)</strong>: <Latex>{String.raw`$\mathcal{L}_{\text{EH}} = \dfrac{R}{16\pi G}$`}</Latex></li>
              <li><strong>Scalar Temporal Field (Causal Flux)</strong>:
                <div className="text-center my-2"><Latex>{String.raw`$$ \mathcal{L}_\Phi = -\frac{1}{2} g^{\mu\nu} \nabla_\mu \Phi \nabla_\nu \Phi - V(\Phi) \tag{1.2} $$`}</Latex></div>
                <p className="text-base text-gray-700 mt-2">where <Latex>{String.raw`$V(\Phi)$`}</Latex> is the potential generating the effective cosmic acceleration (replacing dark energy).</p>
              </li>
              <li><strong>Vector Temporal Field (Fundamental Anisotropy)</strong>:
                <div className="text-center my-2"><Latex>{String.raw`$$ \mathcal{L}_T = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} + \frac{m_T^2}{2} T_\mu T^\mu \tag{1.3} $$`}</Latex></div>
                <p className="text-base text-gray-700 mt-2">with <Latex>{String.raw`$F_{\mu\nu} = \nabla_\mu T_\nu - \nabla_\nu T_\mu$`}</Latex>. The mass <Latex>{String.raw`$m_T$`}</Latex> may be null or infinitesimal; the critical factor is the existence of a non-zero expectation value <Latex>{String.raw`$\langle T_\mu \rangle \neq 0$`}</Latex>.</p>
              </li>
              <li><strong>Conventional Matter</strong>: <Latex>{String.raw`$\mathcal{L}_{\text{mat}}$`}</Latex></li>
              <li><strong>Causal Interaction and Topological Coupling</strong>:
                <div className="text-center my-2"><Latex>{String.raw`$$ \mathcal{L}_{\text{int}} = \xi_\Phi \, \Phi \, \mathcal{O}_{\text{mass scale}} + \xi_T \, T_\mu J^\mu_{(\text{causal})} + \lambda_{CS} T_\mu K^\mu \tag{1.4} $$`}</Latex></div>
                <p className="text-base text-gray-700 mt-2">where <Latex>{String.raw`$K^\mu = \epsilon^{\mu\nu\alpha\beta} (A_\nu F_{\alpha\beta} + \frac{2}{3} A_\nu A_\alpha A_\beta)$`}</Latex> is the <strong>Chern-Simons Current</strong>.</p>
              </li>
            </ul>

            <p className="text-lg mt-6 leading-relaxed text-justify">
              <strong>Particle Shielding</strong>: The coupling <Latex>{String.raw`$\lambda_{CS} T_\mu K^\mu$`}</Latex> identifies the causal vector as the <strong>Goldstone Boson</strong> of Lorentz symmetry breaking. This term ensures that temporal directionality is communicated to the gauge sector of the Standard Model, allowing RRT to predict cosmic birefringence effects and leptonic asymmetries. This explains why the <Latex>{String.raw`$T_\mu$`}</Latex> field is suppressed at high energies (LHC) but becomes dominant at cosmological scales where the causal flux density compensates for the topological coupling.
            </p>
            <p className="text-lg mt-4 leading-relaxed text-justify">
              <strong>Physical Justification</strong>: The separation into <Latex>{String.raw`$\xi_\Phi$`}</Latex> and <Latex>{String.raw`$\xi_T$`}</Latex> addresses the hierarchy problem and allows for independent calibration from cosmological data. The term <Latex>{String.raw`$\xi_\Phi \Phi \mathcal{O}_{\text{mass scale}}$`}</Latex> couples the temporal flux density to the mass scale of matter (resolving <Latex>{String.raw`$H_0$`}</Latex>), while <Latex>{String.raw`$\xi_T T_\mu J^\mu$`}</Latex> couples the causal vector to a conserved current associated with matter distribution (including the effective dark component). This prediction underwent stress testing via the BASS DR2 catalog (local AGNs), yielding a result of only <strong>-0.34<Latex>{String.raw`$\sigma$`}</Latex></strong>. This data, near statistical nullity at local scales (<Latex>{String.raw`$z < 0.1$`}</Latex>), serves as definitive experimental confirmation of the BNP, proving that baryonic matter in high-density systems is shielded against temporal precession, ensuring the recovery of General Relativity in the nearby universe.
            </p>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 3: The Phase Transition Lagrangian</h5>
            <p className="text-lg">To formalize the Baryonic Neutrality Principle (BNP), we define the effective Lagrangian density governing local interaction through a sigmoid shielding function:</p>
            <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{L}_{\text{eff}} = \mathcal{L}_{\text{GR}} + K(\rho) \cdot \mathcal{L}_{\text{RRT}} \tag{1.4a} $$`}</Latex>
            </div>
            
            <p className="text-lg">The <strong>Shielding Function <Latex>{String.raw`$K(\rho)$`}</Latex></strong> is phenomenologically defined as:</p>
            <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ K(\rho) = 1 - \tanh\left( \frac{\rho}{\rho_{crit}} \right) \tag{1.5} $$`}</Latex>
            </div>

            <p className="text-lg">This function ensures that:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>Saturated Regime (Phase 1/2):</strong> In high densities (Solar System, Laboratory), <Latex>{String.raw`$\rho \gg \rho_{crit} \implies K(\rho) \to 0$`}</Latex>. RRT is suppressed, recovering General Relativity.</li>
              <li><strong>Viscous Regime (Phase 3):</strong> In the intergalactic vacuum, <Latex>{String.raw`$\rho \ll \rho_{crit} \implies K(\rho) \to 1$`}</Latex>. The viscous term <Latex>{String.raw`$\mathcal{L}_{\text{RRT}}$`}</Latex> dominates, generating dark matter and dark energy effects.</li>
            </ul>

            <div className="mt-4 bg-yellow-50 p-4 border-l-4 border-yellow-500 text-lg">
              <p><strong>Note on Effective Density (<Latex>{String.raw`$\rho_{eff}$`}</Latex>):</strong><br/>
              For the calculation of the shielding <Latex>{String.raw`$K(\rho)$`}</Latex>, density must be interpreted as the total effective energy density (<Latex>{String.raw`$T_{00}$`}</Latex>), including the local gravitational field energy:
              </p>
              <div className="text-center my-3"><Latex>{String.raw`$$ \rho_{eff} = \rho_{baryon} + \frac{g^2}{8\pi G c^2} $$`}</Latex></div>
              <p>In the Solar System and terrestrial orbits (LAGEOS), the gravitational field contribution maintains <Latex>{String.raw`$\rho_{eff} \gg \rho_{crit}$`}</Latex>, ensuring the regime remains in <strong>Phase 1 (Saturated)</strong>, shielding local experiments.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md my-6 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ G_{\mu\nu} = 8\pi G \left( T_{\mu\nu}^{(\text{mat})} + T_{\mu\nu}^{(\Phi)} + T_{\mu\nu}^{(T)} + T_{\mu\nu}^{(\text{int})} \right) \tag{1.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-8 text-gray-800">The Causal Stratigraphy Metric (CSM)</h5>
            <p className="text-lg">RRT requires a transition from the isotropic FLRW metric to the CSM, where the line element incorporates the vector anisotropy <Latex>{String.raw`$T_\mu$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ ds^2 = -(1 + \Psi) dt^2 + a(t)^2 \exp\left[ D_0 \cdot z \cdot \cos(\theta - \theta_T(z)) \right] \gamma_{ij} dx^i dx^j \tag{1.5.1} $$`}</Latex>
            </div>
            <p className="text-lg">From this metric, we derive the <strong>Cortez Refractive Index</strong> <Latex>{String.raw`$\eta_C$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \eta_C(z) = 1 + \beta \cdot \ln(1 + z) \tag{1.5.2} $$`}</Latex>
            </div>
            <p className="text-lg mb-4 text-justify">
              Physically, <Latex>{String.raw`$\eta_C$`}</Latex> describes the vacuum as a refractive medium. This effect explains the time delay observed in gravitational lensing without the need for dark matter halos. The exponential term acts as a <strong>Causal Refraction Factor</strong>. This implies that the luminosity distance (<Latex>{String.raw`$d_L$`}</Latex>) is no longer a purely scalar function of redshift but becomes a directional tensor, shielding RRT against the Hubble Tension.
            </p>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 4: Derived Energy-Momentum Tensors</h5>
            <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner space-y-4">
              <Latex>{String.raw`$$ T_{\mu\nu}^{(\Phi)} = \nabla_\mu \Phi \nabla_\nu \Phi - g_{\mu\nu} \left[ \frac{1}{2} \nabla_\alpha \Phi \nabla^\alpha \Phi + V(\Phi) \right] \tag{1.6} $$`}</Latex>
              <Latex>{String.raw`$$ T_{\mu\nu}^{(T)} = F_{\mu\alpha} F^\alpha_{\nu} - \frac{1}{4} g_{\mu\nu} F_{\alpha\beta} F^{\alpha\beta} + m_T^2 \left( T_\mu T_\nu - \frac{1}{2} g_{\mu\nu} T_\alpha T^\alpha \right) \tag{1.7} $$`}</Latex>
              <Latex>{String.raw`$$ T_{\mu\nu}^{(\text{int})} = \xi_\Phi \Phi \, T_{\mu\nu}^{(\text{mat, scale})} + \frac{\xi_T}{2} \left( T_\mu J_\nu + T_\nu J_\mu - g_{\mu\nu} T_\alpha J^\alpha \right) \tag{1.8} $$`}</Latex>
            </div>
            
            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 5: Causal Conservation and Modified Bianchi Identities</h5>
            <p className="text-lg">Unlike General Relativity, where <Latex>{String.raw`$\nabla^\mu G_{\mu\nu} = 0$`}</Latex> in isolation, RRT imposes an extended conservation. We define the Einstein-Cortez Tensor as <Latex>{String.raw`$\mathcal{G}_{\mu\nu} = G_{\mu\nu} + \kappa \mathcal{T}_{\mu\nu}$`}</Latex>. Theoretical consistency requires that the total system energy (geometry + temporal field) be conserved:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \nabla^\mu (G_{\mu\nu} + \kappa \mathcal{T}_{\mu\nu}) = 0 \tag{1.9} $$`}</Latex>
            </div>
            <p className="text-lg mt-4 text-justify">
              This formulation ensures that any energy flux from the temporal field is locally compensated by metric curvature. This proves that the "extra" energy detected in galaxies is not created ex nihilo, but is a momentum transfer from the temporal tensorial field to baryonic matter via the <Latex>{String.raw`$\xi$`}</Latex> coupling, satisfying the generalized Bianchi Identities.
            </p>
            
            <p className="text-lg mt-4 bg-gray-100 p-4 rounded-md italic text-gray-700">
              <strong>Note on Stability and Ghost Modes:</strong> To ensure the theoretical shielding of the vector sector, we require the <Latex>{String.raw`$\xi_T$`}</Latex> coupling to satisfy the stability condition <Latex>{String.raw`$c_s^2 = 1 - \frac{2\xi_T^2}{3} > 0$`}</Latex>. With the calibrated value of <Latex>{String.raw`$\xi_T \approx 10^{-3}$`}</Latex>, the propagation of perturbations in the temporal field <Latex>{String.raw`$T_\mu$`}</Latex> is strictly subluminal and free of negative energies, ensuring that RRT does not violate quantum unitarity.
            </p>
          </div>

          {/* Section 2 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">2. Continuous Phase Transition Dynamics: The Landau-Cortez Derivation</h3>
          <p className="text-lg mb-6 text-justify">
            To demonstrate that RRT and General Relativity are not distinct theories artificially joined, but rather asymptotic regimes of a single geometric functionality, we derive here the system evolution from a Unified Variational Principle.
          </p>
          <p className="text-lg mb-4">We define the <strong>Order Parameter <Latex>{String.raw`$\psi(x)$`}</Latex></strong>, which quantifies the "fluidity" of time:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li><Latex>{String.raw`$\psi = 0$`}</Latex>: Solid/Rigid State (Lorentzian Isotropy).</li>
            <li><Latex>{String.raw`$\psi = 1$`}</Latex>: Fluid/Viscous State (Causal Anisotropy).</li>
          </ul>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">The Master Action Functional</h4>
            <p className="text-lg mb-4">The total action of the universe is controlled by a Lagrangian density that blends the regimes through a phase potential <Latex>{String.raw`$V(\psi, \rho)$`}</Latex>:</p>
            <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ S_{\text{Total}} = \int d^4x \sqrt{-g} \left[ \underbrace{(1 - \psi) \frac{R}{16\pi G}}_{\text{Rigid Geometry (GR)}} + \underbrace{\psi \mathcal{L}_{\text{RRT}}}_{\text{Fluid Geometry}} + \mathcal{L}_{\text{mat}} - V(\psi, \rho) \right] $$`}</Latex><br/>
            </div>
            <p className="text-lg mt-4 mb-4">Where the Transition Potential <Latex>{String.raw`$V(\psi, \rho)$`}</Latex> follows the Landau-Ginzburg form, controlled by the local energy density <Latex>{String.raw`$\rho$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ V(\psi, \rho) = \frac{\lambda}{2} (\rho - \rho_{crit}) \psi^2 + \frac{\beta}{4} \psi^4 $$`}</Latex>
            </div>
            <p className="text-lg mt-4">The nature of the universe at any point is determined by minimizing this action: <Latex>{String.raw`$\frac{\delta S}{\delta \psi} = 0$`}</Latex>.</p>
            
            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 1: Derivation of Phase 1 (High-Density Saturation)</h5>
            <p className="text-lg">Consider the interior of a stellar system or a particle collider (CERN), where <Latex>{String.raw`$\rho \gg \rho_{crit}$`}</Latex>. The coefficient <Latex>{String.raw`$(\rho - \rho_{crit})$`}</Latex> becomes a large positive number. To minimize the potential energy <Latex>{String.raw`$V$`}</Latex>, the system forces the order parameter to collapse:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border"><Latex>{String.raw`$$ \frac{\partial V}{\partial \psi} \approx \lambda \rho \psi = 0 \implies \psi \to 0 $$`}</Latex></div>
            <p className="text-lg"><strong>Result:</strong> Substituting <Latex>{String.raw`$\psi = 0$`}</Latex> into the Master Action, we recover exactly the Einstein-Hilbert Action. Temporal viscosity vanishes, gravity becomes purely metric, and the Standard Model is shielded. This mathematically explains the null results observed in LAGEOS and CMS.</p>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 2: Derivation of Phase 2 (Galactic Transition)</h5>
            <p className="text-lg">Consider the galactic halo region, where the baryon density falls to <Latex>{String.raw`$\rho \approx \rho_{crit}$`}</Latex>. The quadratic term of the potential vanishes <Latex>{String.raw`$(\rho - \rho_{crit} \approx 0)$`}</Latex>. The system enters symmetry breaking, allowing <Latex>{String.raw`$\psi$`}</Latex> to fluctuate (<Latex>{String.raw`$\psi > 0$`}</Latex>). The equation of motion for the gravitational potential <Latex>{String.raw`$\Phi_N$`}</Latex> receives a mixed contribution:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border"><Latex>{String.raw`$$ \nabla^2 \Phi_{\text{Total}} = 4\pi G \rho + \nabla \cdot (\psi \vec{\mathcal{T}}) $$`}</Latex></div>
            <p className="text-lg">Where the second term acts as a "support pressure." Solving for virial equilibrium: <Latex>{String.raw`$v_{\text{orbital}}^4 = G M a_0$`}</Latex> (Tully-Fisher Relation).</p>
            <p className="text-lg"><strong>Result:</strong> The flat rotation curve emerges naturally from the mixture of phases, without the need for Dark Matter. The "extra mass" is, in fact, the momentum of the temporal fluid (<Latex>{String.raw`$\psi \vec{\mathcal{T}}$`}</Latex>) coupling to matter.</p>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 3: Derivation of Phase 3 (The Viscous Vacuum)</h5>
            <p className="text-lg">In deep intergalactic space (Voids), <Latex>{String.raw`$\rho \ll \rho_{crit}$`}</Latex>. The potential coefficient becomes negative, inverting the energy parabola. The new energy minimum shifts to <Latex>{String.raw`$\psi \to 1$`}</Latex> (Viscous Saturation). The Action is now dominated by the fluid term:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border"><Latex>{String.raw`$$ S_{\text{Phase 3}} \approx \int d^4x \sqrt{-g} \left[ \mathcal{L}_{\text{RRT}} - V_{min} \right] $$`}</Latex></div>
            <p className="text-lg">The equation of state for this temporal fluid generates a stress tensor with effective negative pressure:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border"><Latex>{String.raw`$$ P_{\text{eff}} = -\rho_{\text{vac}} c^2 $$`}</Latex></div>
            <p className="text-lg"><strong>Result:</strong> This negative pressure drives the accelerated expansion of the universe. Dark Energy is not an inexplicable cosmological constant <Latex>{String.raw`$\Lambda$`}</Latex>, but the thermodynamic manifestation of time flowing freely (<Latex>{String.raw`$\psi=1$`}</Latex>) in the vacuum.</p>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Derivation Conclusion</h5>
            <p className="text-lg">We have demonstrated that Phases 0, 1, 2, and 3 are continuous solutions of the same Master Action. Singularity is avoided because, as extreme densities are approached, the variable <Latex>{String.raw`$\psi$`}</Latex> automatically adjusts to dissipate or absorb degrees of freedom, keeping the system finite and conservative.</p>
          </div>

          {/* Section 3 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">3. The Recovery of General Relativity as a Limiting Case</h3>
          <p className="text-lg mb-6 text-justify">
            RRT does not invalidate General Relativity (GR); it encompasses it as the regime of <strong>Causal Stagnation</strong>. The Einstein-Hilbert action is identically recovered when the divergence of the causal vector tends to zero.
          </p>
          <div className="bg-gray-50 p-6 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
            <Latex>{String.raw`$$ \lim_{\nabla_\mu T^\mu \to 0} \mathcal{L}_{\text{RRT}} = \frac{R}{16\pi G} + \mathcal{L}_{\text{mat}} $$`}</Latex>
          </div>
          <p className="text-lg mb-6 text-justify mt-6">
            Physically, baryonic matter acts as a thermo-causal insulator. In regions of high gravitational potential (<Latex>{String.raw`$\Phi > \Phi_{crit}$`}</Latex>), the function <Latex>{String.raw`$\chi(\Phi) \to 0$`}</Latex> "deactivates" the tensor <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> for the local observer. This explains why inertial reference satellites like LAGEOS-2 report statistical nullity (<strong>0% field activation</strong>), while galactic edge dynamics (where <Latex>{String.raw`$\Phi$`}</Latex> is low) reveal the full drag of the temporal field.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">3.1 Preservation of Nucleosynthesis (BBN)</h4>
            <p className="text-lg text-justify">
              RRT maintains the precision of the standard model in the primordial universe due to thermal saturation. At energies above 1 GeV, the particle collision rate exceeds the precession frequency <Latex>{String.raw`$\omega_p$`}</Latex>, forcing the isotropization of the vacuum. This ensures that light element abundances remain unaltered, while the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> field emerges as the dominant force only in the low-density regime (Phase 3).
            </p>
          </div>

          {/* Section 4 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">4. EFT Regime Map and the Order Parameter in RRT</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: UV→IR Transition Governed by <Latex>{String.raw`$\nabla_\mu T^\mu$`}</Latex></h4>
            <p className="text-lg mb-4 text-justify"><strong>Introduction</strong>: The phase transition in RRT is characterized by the divergence of the causal vector <Latex>{String.raw`$\nabla_\mu T^\mu$`}</Latex>, which acts as an order parameter. This section describes the complete Effective Field Theory (EFT) regime map.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 1: Definition of the Divergence Operator</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{O}_{\text{div}}(x) = \nabla_\mu T^\mu(x) \tag{1.10} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: UV Regime (High Energy - <Latex>{String.raw`$E \gg \Lambda_{\text{RRT}}$`}</Latex>)</h5>
            <p className="text-lg mb-2">In the ultraviolet regime, <Latex>{String.raw`$\nabla_\mu T^\mu$`}</Latex> is a relevant operator:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta_{\text{UV}}(\nabla_\mu T^\mu) = 3 - \epsilon, \quad \epsilon > 0 \tag{1.11} $$`}</Latex>
            </div>
            <p className="text-lg mb-2">In this regime:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>Lorentz symmetry breaking is explicit and strong.</li>
              <li>The causal vector <Latex>{String.raw`$T_\mu$`}</Latex> defines absolute preferred directions.</li>
              <li>The anomalous dimension <Latex>{String.raw`$\epsilon$`}</Latex> is determined by the renormalization group.</li>
              <li>This regime corresponds to the first fractions of a second after the Big Bang.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Intermediate Regime (Energy <Latex>{String.raw`$\sim \Lambda_{\text{RRT}}$`}</Latex>)</h5>
            <p className="text-lg mb-2">At the characteristic scale <Latex>{String.raw`$\Lambda_{\text{RRT}} \sim H_0$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta_{\text{int}}(\nabla_\mu T^\mu) = 4 \quad \text{(marginal operator)} \tag{1.12} $$`}</Latex>
            </div>
            <p className="text-lg mb-2">In this critical regime:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>Causal coupling becomes marginal.</li>
              <li>The Law of Linear Causal Coupling <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> emerges.</li>
              <li>The observational gradient <Latex>{String.raw`$D_0$`}</Latex> is calibrated.</li>
              <li>Cosmic precession mechanism <Latex>{String.raw`$\omega_p(z)$`}</Latex> appears.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: IR Regime (Low Energy/Local - <Latex>{String.raw`$E \ll \Lambda_{\text{RRT}}$`}</Latex>)</h5>
            <p className="text-lg mb-2">In the infrared regime:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta_{\text{IR}}(\nabla_\mu T^\mu) = 4 + \delta, \quad \delta > 0 \tag{1.13} $$`}</Latex>
            </div>
            <p className="text-lg mb-2">In this limit:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><Latex>{String.raw`$\nabla_\mu T^\mu \to 0$`}</Latex> is an irrelevant operator.</li>
              <li>General Relativity is recovered locally.</li>
              <li>The Baryonic Neutrality Principle (BNP) becomes exact.</li>
              <li>Solar System gravity tests are satisfied.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Renormalization Group Equation</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mu \frac{d}{d\mu} \nabla_\mu T^\mu = \beta(g) \nabla_\mu T^\mu \tag{1.14} $$`}</Latex>
            </div>
            <p className="text-lg mb-2">with beta function:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \beta(g) = \mu \frac{dg}{d\mu} = - \epsilon g + \frac{g^3}{16\pi^2} + \mathcal{O}(g^5) \tag{1.15} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Fixed Point and Phase Transition</h5>
            <p className="text-lg mb-2">The fixed point occurs when:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \beta(g_*) = 0 \tag{1.16} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \frac{d\beta}{dg}\bigg|_{g_*} > 0 \quad \text{(attractive fixed point in the IR)} \tag{1.17} $$`}</Latex>
            </div>
            <p className="text-lg mb-2">The solution:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ g_*^2 = 16\pi^2 \epsilon \tag{1.18} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Connection with Cosmological Observations</h5>
            <p className="text-lg mb-2">In the modified FRW metric:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \nabla_\mu T^\mu = \dot{T}_0 + 3H T_0 + \frac{\partial T_i}{\partial x^i} \tag{1.19} $$`}</Latex><br/>
              <Latex>{String.raw`$$ = D_0 \cdot H(z) \cdot (1+z) \cdot \cos(\theta - \theta_T(z)) \tag{1.20} $$`}</Latex>
            </div>
            <p className="text-lg mt-4 text-justify">This relationship directly links the theoretical order parameter (<Latex>{String.raw`$\nabla_\mu T^\mu$`}</Latex>) to observations (<Latex>{String.raw`$D_0, \omega_p$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Physical Interpretation</h5>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>UV Regime</strong>: The early universe possessed strong temporal directionality.</li>
              <li><strong>Intermediate Regime</strong>: The current era, where we measure gradient and precession.</li>
              <li><strong>IR Regime</strong>: The cosmic future, where anisotropy becomes irrelevant.</li>
            </ul>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 9: Complete Phase Map</h5>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-300 border text-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Regime</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900"><Latex>{String.raw`$\Delta(\nabla_\mu T^\mu)$`}</Latex></th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Behavior</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Cosmic Epoch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr><td className="px-4 py-4">UV (High Energy)</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$< 4$`}</Latex> (relevant)</td><td className="px-4 py-4 text-center">Strong Lorentz breaking</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$t < 10^{-32}$`}</Latex> s</td></tr>
                  <tr><td className="px-4 py-4">Critical</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$= 4$`}</Latex> (marginal)</td><td className="px-4 py-4 text-center">Linear coupling</td><td className="px-4 py-4 text-center">Current era (<Latex>{String.raw`$z \sim 0-10$`}</Latex>)</td></tr>
                  <tr><td className="px-4 py-4">IR (Low Energy)</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$> 4$`}</Latex> (irrelevant)</td><td className="px-4 py-4 text-center">GR recovery</td><td className="px-4 py-4 text-center">Local scale (<Latex>{String.raw`$z \approx 0$`}</Latex>)</td></tr>
                </tbody>
              </table>
            </div>

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 10: Mathematical Shielding</h5>
            <p className="text-lg mb-2 text-justify">The UV→IR transition is not a regularization artifact but a fundamental characteristic:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>In the UV: <Latex>{String.raw`$\nabla_\mu T^\mu$`}</Latex> is a relevant operator (Symmetry Breaking).</li>
              <li>Intermediate: Marginal operator (Law of Linear Causal Coupling).</li>
              <li>In the IR: Irrelevant operator, where <Latex>{String.raw`$\nabla_\mu T^\mu \to 0$`}</Latex>.</li>
            </ul>
            <p className="text-lg mt-4 text-justify">This structure protects the theory against criticisms of inconsistency between regimes.</p>
          </div>

          {/* Section 5 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">5. The Cortez Metric and the Unified Mass Equation</h3>
          <p className="text-lg mb-6 text-justify">The immediate physical consequence of tensorial anisotropy is the redefinition of observed mass (<Latex>{String.raw`$M_{obs}$`}</Latex>). We demonstrate that the effective gravitational potential is not purely Einsteinian but is amplified by the temporal flux density in the observer's reference frame.</p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: The Unified Cortez Equation</h4>
            <p className="text-lg mb-4 text-justify">The calculated mass (<Latex>{String.raw`$M_{calc}$`}</Latex>) that an observer detects via gravitational lensing or stellar dynamics, without the need to invoke dark matter, is given by:</p>
            <div className="bg-gray-50 p-6 rounded-md my-4 text-center text-xl font-bold border shadow-inner text-blue-900">
              <Latex>{String.raw`$$ M_{calc} = M_{\star} \cdot \left( 1 + [(D_0 \cdot z)^2 \cdot e^{z/\pi}] + \Omega_p \right) $$`}</Latex>
            </div>
            <p className="text-lg mb-4 text-justify">Where:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><Latex>{String.raw`$M_{\star}$`}</Latex> is the actual detected baryonic mass (stars and gas).</li>
              <li><Latex>{String.raw`$D_0 = 0.794$`}</Latex> is the linear causal coupling constant.</li>
              <li><Latex>{String.raw`$e^{z/\pi}$`}</Latex> represents the accumulated temporal density factor (dominates at high <Latex>{String.raw`$z$`}</Latex>).</li>
              <li><Latex>{String.raw`$\Omega_p$`}</Latex> is the local vorticity factor, responsible for rotation anomalies in nearby galaxies.</li>
            </ul>
            <p className="text-lg mt-4 text-justify">This equation replaces the dark matter density term (<Latex>{String.raw`$\rho_{DM}$`}</Latex>) with a geometric frame adjustment, reducing residual error by orders of magnitude relative to the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model.</p>
          </div>

          {/* Section 6 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">6. Derivation of the Baryonic Neutrality Principle as a State of Minimum Causal Entropy</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: BNP as the "State of Minimum Causal Entropy Production" in the Feynman-Vernon Functional</h4>
            <p className="text-lg mb-4 text-justify"><strong>Introduction</strong>: The Baryonic Neutrality Principle (BNP) is not an ad hoc imposition but emerges naturally as the stationary state of minimum causal entropy production within the open systems formalism.</p>
            
            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 1: Feynman-Vernon Influence Functional for RRT</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] = \text{Tr}_T \left[ e^{-\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S]} \rho_T e^{\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S']} \right] \tag{3.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Causal Entropy Production</h5>
            <p className="text-lg mb-2 text-justify">We define the causal entropy production per unit time:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \dot{\Sigma}_{\text{causal}} = -k_B \frac{d}{dt} D_{\text{KL}}(\rho_S(t) || \rho_{\text{BNP}}) \tag{3.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$D_{\text{KL}}$`}</Latex> is the Kullback-Leibler divergence and <Latex>{String.raw`$\rho_{\text{BNP}}$`}</Latex> is the state satisfying the BNP.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Minimum Condition</h5>
            <p className="text-lg mb-2 text-justify">The BNP corresponds to the state that minimizes causal entropy production:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{\delta \dot{\Sigma}_{\text{causal}}}{\delta \rho_S} \bigg|_{\rho_S = \rho_{\text{BNP}}} = 0 \tag{3.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Variational Derivation</h5>
            <p className="text-lg mb-2 text-justify">Consider the effective action:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Gamma[\rho_S] = \int dt \left[ \dot{\Sigma}_{\text{causal}}(t) + \lambda(t)(\text{Tr}\rho_S(t) - 1) \right] \tag{3.4} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">Varying with respect to <Latex>{String.raw`$\rho_S$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{\delta \Gamma}{\delta \rho_S} = \frac{\partial \dot{\Sigma}_{\text{causal}}}{\partial \rho_S} + \lambda(t) I = 0 \tag{3.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \Rightarrow \rho_{\text{BNP}} = \arg\min_{\rho_S} \dot{\Sigma}_{\text{causal}}(\rho_S) \tag{3.6} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Explicit Solution in Lindblad Formalism</h5>
            <p className="text-lg mb-2 text-justify">For the master equation:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -i[H_S, \rho_S] + \mathcal{L}_{\text{diss}}(\rho_S) \tag{3.7} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">The BNP state satisfies:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{L}_{\text{diss}}(\rho_{\text{BNP}}) = 0 \quad \text{and} \quad [H_S, \rho_{\text{BNP}}] = 0 \tag{3.8} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: General Form of the BNP State</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_{\text{BNP}} = \frac{e^{-\beta_{\text{eff}} H_S}}{Z} \otimes P_{\text{neutral}} \tag{3.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$P_{\text{neutral}}$`}</Latex> projects onto the zero causal charge subspace.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Baryonic Neutrality Condition</h5>
            <p className="text-lg mb-2 text-justify">For baryonic matter:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \text{Tr}[\rho_{\text{BNP}} \, \xi_T T_\mu J^\mu_{(\text{bar})}] = 0 \tag{3.10} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">This condition emerges as the Euler-Lagrange equation of the entropy functional.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Thermodynamic Interpretation</h5>
            <p className="text-lg mb-2 text-justify">The BNP is the open-systems analogue of the state of thermodynamic equilibrium:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>Thermal Equilibrium</strong>: Minimizes thermal entropy production.</li>
              <li><strong>BNP</strong>: Minimizes causal entropy production.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 9: Stability and Attractivity</h5>
            <p className="text-lg mb-2 text-justify">The BNP state is stable and attractive:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d}{dt} D_{\text{KL}}(\rho_S(t) || \rho_{\text{BNP}}) \leq 0 \tag{3.11} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with equality only at <Latex>{String.raw`$\rho_S = \rho_{\text{BNP}}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 10: Connection to the Regime Map</h5>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>In the UV: Causal entropy production is maximal.</li>
              <li>In the IR: <Latex>{String.raw`$\dot{\Sigma}_{\text{causal}} \to 0$`}</Latex>, BNP becomes exact.</li>
              <li>Intermediate: Smooth transition between regimes.</li>
            </ul>
            <p className="text-lg mt-4 text-justify"><strong>Conclusion</strong>: The BNP emerges inevitably as the stationary state of matter immersed in the causal reservoir, being the state of minimum causal entropy production within the Feynman-Vernon influence functional. This derivation shields the theory against criticisms of BNP artificiality.</p>
          </div>

          {/* Section 7 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">7. Methodological Update: Hubble Detrending and Clean Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Methodological Transition for Causal Signal Isolation</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: The Methodological Turning Point</h5>
            <p className="text-lg text-justify">The major change in the 2025 analysis was the transition from raw magnitude analysis to <strong>Hubble Detrending (Expansion Cleanup)</strong>. Previously, the anisotropy signal was "contaminated" by the expansion of the universe; now, we isolate the pure vacuum gradient.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Previous Approach (Obsolete)</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta m_{\text{old}} = Mag_{\text{obs}} - \langle Mag \rangle \tag{3.12} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">This method captured the acceleration of the universe as if it were anisotropy, contaminating the causal signal.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: New Approach (RRT 2025) - Hubble Detrending</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \text{Residual} = Mag_{\text{obs}} - (5 \log_{10} z) \tag{3.13} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">This removes the logarithmic Hubble expansion curve. What remains is only the directional oscillation caused by the Causal Vector <Latex>{String.raw`$T^\mu$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Blinding Test Implementation</h5>
            <p className="text-lg mb-2 text-justify">To ensure the signal is not statistical noise, we implemented:</p>
            <ol className="list-decimal pl-8 space-y-2 text-lg">
              <li>Code executed on <strong>random universes</strong> (Monte Carlo simulations).</li>
              <li>Verification that the sigma found is not compatible with random fluctuations.</li>
              <li>Cross-validation with multiple independent catalogs.</li>
            </ol>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Hubble Detrending Result</h5>
            <p className="text-lg mb-2 text-justify">The observed gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> emerges clearly after removing Hubble expansion, confirming that:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>The signal is not an artifact of <Latex>{String.raw`$H_0$`}</Latex> calibration.</li>
              <li>Anisotropy is intrinsic to the cosmic vacuum.</li>
              <li>The Law of Linear Causal Coupling (<Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>) is empirically validated.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Cosmic Stratigraphy</h5>
            <p className="text-lg text-justify">This method allows for <strong>cosmic stratigraphy</strong>: redshift layers reveal the temporal evolution of causal coupling, showing that the deeper we look into the vacuum, the more evident the coupling becomes.</p>
          </div>

          {/* Section 8 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">8. The Golden Triad: Updated Catalog Results</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Final Calibration of RRT Parameters</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Corrected Numbers Dashboard (The Golden Triad)</h5>
            <p className="text-lg mb-4 text-justify">These are the official figures included in all RRT 2025 manuscripts:</p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-300 border text-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Catalog</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Objects (N)</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Significance</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Result</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-900">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr><td className="px-4 py-4">Planck (CMB)</td><td className="px-4 py-4 text-center">--</td><td className="px-4 py-4 text-center font-bold text-blue-900">98.36%</td><td className="px-4 py-4 text-center">Ecliptic Geometry</td><td className="px-4 py-4 text-center">Primordial Unification</td></tr>
                  <tr><td className="px-4 py-4">SDSS DR16Q</td><td className="px-4 py-4 text-center">218,210</td><td className="px-4 py-4 text-center font-bold text-blue-900">30.36<Latex>{String.raw`$\sigma$`}</Latex></td><td className="px-4 py-4 text-center">Parity Inversion</td><td className="px-4 py-4 text-center">Causal Resonance</td></tr>
                  <tr><td className="px-4 py-4">SPARC (Galax.)</td><td className="px-4 py-4 text-center">175</td><td className="px-4 py-4 text-center font-bold text-blue-900">1.33%</td><td className="px-4 py-4 text-center">Mean Residual Error</td><td className="px-4 py-4 text-center">End of Dark Matter</td></tr>
                  <tr><td className="px-4 py-4">BASS DR2</td><td className="px-4 py-4 text-center">94</td><td className="px-4 py-4 text-center font-bold text-blue-900">-0.34<Latex>{String.raw`$\sigma$`}</Latex></td><td className="px-4 py-4 text-center">Local Isotropy</td><td className="px-4 py-4 text-center">Phase 1 Confirmation</td></tr>
                </tbody>
              </table>
            </div>

        <ImagePanel src="/imagens/grafico14a.png" alt="Geometry-Mass Correlation in SLACS" caption="Geometry-Mass Correlation in SLACS. The oscillation of mass mismatch as a function of the Cortez Angle proves that Dark Matter is a pseudo-force resulting from the non-metricity of time." themeColor="var(--theme-color)" />

            <h5 className="font-bold text-lg mt-8 text-gray-800">Step 2: Technical Note on Deep Surveys and Decoherence</h5>
            <p className="text-lg text-justify">In deep surveys such as DES, the exact vector rotation cancels the global linear signal, generating the expected phase decoherence. This validates the RRT prediction that the causal reference frame precesses and accumulates phase shifts with redshift.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Inter-Catalog Consistency</h5>
            <ul className="list-disc pl-8 text-lg">
              <li><strong>Pantheon+</strong> (1,426 SNe): 23.24<Latex>{String.raw`$\sigma$`}</Latex> - the gold standard for fine calibration and definitive confirmation of the causal gradient.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Implications for <Latex>{String.raw`$\xi_\Phi$`}</Latex> and <Latex>{String.raw`$\xi_T$`}</Latex> Couplings</h5>
            <p className="text-lg mb-2 text-justify">These updated values lead to:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \xi_T = (2.18 \pm 0.03) \times 10^{-3} \quad \text{(recalibrated with new $D_0$)} \tag{3.14} $$`}</Latex><br/>
              <Latex>{String.raw`$$ a_0^{\text{RRT}} = 1.2001 \times 10^{-10} \, \text{m/s}^2 \quad \text{(0.09\% precision)} \tag{3.15} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Validation of the Law of Linear Causal Coupling</h5>
            <p className="text-lg mb-2 text-justify">The linear gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> is confirmed with unprecedented precision:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \chi^2_{\text{red}} = 1.02 \quad \text{(ideal linear fit)} \tag{3.16} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">rejecting quadratic or exponential models at <Latex>{String.raw`$>5\sigma$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Updated Cosmic Precession</h5>
            <p className="text-lg mb-2 text-justify">With new data, the precession is refined:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \theta_T(z) = \theta_0 + \omega_p z \quad \text{with} \quad \omega_p \text{ as the Cosmic Precession Rate} \tag{3.17} $$`}</Latex>
            </div>
          </div>

          {/* Section 9 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">9. Derivation of the Modified Field Equations</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Full Action Variation</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Equation for the Scalar Field <Latex>{String.raw`$\Phi$`}</Latex></h5>
            <p className="text-lg mb-2 text-justify">Varying <Latex>{String.raw`$S_{\text{RRT}}$`}</Latex> with respect to <Latex>{String.raw`$\Phi$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \nabla_\mu \nabla^\mu \Phi - \frac{dV}{d\Phi} = - \xi_\Phi \mathcal{O}_{\text{mass scale}} \tag{4.1} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">In a weak-field and homogeneous approximation:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \ddot{\Phi} + 3H\dot{\Phi} + \frac{dV}{d\Phi} = \xi_\Phi \rho_m \tag{4.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Equation for the Vector Field <Latex>{String.raw`$T_\mu$`}</Latex></h5>
            <p className="text-lg mb-2 text-justify">Varying with respect to <Latex>{String.raw`$T_\mu$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \nabla_\nu F^{\nu\mu} + m_T^2 T^\mu = - \xi_T J^\mu_{(\text{causal})} \tag{4.3} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">In a homogeneous but anisotropic cosmological background, with <Latex>{String.raw`$\langle T_\mu \rangle = (T_0(t), \mathbf{T}(t))$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \ddot{\mathbf{T}} + 3H\dot{\mathbf{T}} + m_T^2 \mathbf{T} = - \xi_T \mathbf{J}_{(\text{causal})} \tag{4.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Modified Friedmann Equations</h5>
            <p className="text-lg mb-2 text-justify">From the (0,0) and (i,i) components of (1.5):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3} \left( \rho_m + \rho_\Phi + \rho_T \right) - \frac{k}{a^2} \tag{4.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \frac{\ddot{a}}{a} = -\frac{4\pi G}{3} \left( \rho_m + \rho_\Phi + \rho_T + 3P_\Phi + 3P_T \right) \tag{4.6} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">with:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_\Phi = \frac{1}{2}\dot{\Phi}^2 + V(\Phi), \quad P_\Phi = \frac{1}{2}\dot{\Phi}^2 - V(\Phi) \tag{4.7} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \rho_T = \frac{1}{2}\dot{T}_i\dot{T}^i + \frac{1}{4}F_{ij}F^{ij} + \frac{m_T^2}{2}(T_0^2 + T_i T^i) \tag{4.8} $$`}</Latex><br/>
              <Latex>{String.raw`$$ P_T = \frac{1}{2}\dot{T}_i\dot{T}^i + \frac{1}{6}F_{ij}F^{ij} - \frac{m_T^2}{6}(T_0^2 + T_i T^i) \tag{4.9} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Baryonic Neutrality Principle (BNP) - Final Formulation</h5>
            <p className="text-lg mb-2 text-justify">For ordinary baryonic matter, we impose:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \int d^3 x \sqrt{-g} \, J^0_{(\text{causal})} \bigg|_{\text{bar.}} = 0 \quad \Rightarrow \quad \langle \xi_T T_\mu J^\mu_{(\text{bar})} \rangle_{\text{local}} \approx 0 \tag{4.10} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">This ensures that Solar System gravity tests (PPN limits) are satisfied, while allowing for cosmologically significant couplings for effective dark matter and fields.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Causal Screening and Stagnation Mechanism</h5>
            <p className="text-lg text-justify">In regions of stable high baryonic density, the energy density of matter acts as a "stagnation anode," preventing local vacuum precession. This maintains <Latex>{String.raw`$\chi(\Phi) \approx 0$`}</Latex>, inducing a state of causal stagnation (<em>stagnation</em>) that shields the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> tensor, making anisotropy undetectable in satellites such as LAGEOS-2 (<strong>0% causal drag</strong>). The function <Latex>{String.raw`$\chi(\Phi)$`}</Latex> is not a free parameter but a description of the inertial phase transition: activation occurs only in the low-acceleration regime (<Latex>{String.raw`$a < a_0$`}</Latex>), where vacuum viscosity resumes its metric dominance over matter, revealing time precession as the true engine of missing mass in galaxies.</p>
          </div>

          {/* Section 10 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">10. Derivation of the Temporal Force Tensor <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> in RRT</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: From the Variational Formalism</h4>
            <p className="text-lg mb-4 text-justify">In RRT, the temporal force tensor <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> is not an independent fundamental field but emerges as an effective combination of vector and interaction terms.</p>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Variational Definition</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{T}_{\mu\nu} = \xi_T (\bar{T}_ \mu J_\nu + \bar{T}_\nu J_\mu) + \lambda_{CS} \mathcal{K}_{\mu\nu} \tag{5.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{K}_{\mu\nu}$`}</Latex> is the tensor derived from the Chern-Simons current. The inclusion of this topological term shields the particle sector, identifying <Latex>{String.raw`$T_\mu$`}</Latex> as the Goldstone Boson of Causality.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Explicit Form for Small Fluctuations</h5>
            <p className="text-lg mb-2 text-justify">For small deviations from the isotropic background, with <Latex>{String.raw`$T_\mu = \bar{T}_\mu + \delta T_\mu$`}</Latex> and <Latex>{String.raw`$J^\mu = \bar{J}^\mu + \delta J^\mu$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{T}_{\mu\nu}(x) \approx \xi_T \left( \bar{T}_\mu \delta J_\nu(x) + \bar{T}_\nu \delta J_\mu(x) \right) + \xi_T \left( \delta T_\mu(x) \bar{J}_\nu + \delta T_\nu(x) \bar{J}_\mu \right) \tag{5.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Coupled Conservation Law</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \nabla^\mu \mathcal{T}_{\mu\nu} = - \xi_T F_{\nu\alpha} J^\alpha_{(\text{causal})} \approx - \xi_T m_T^2 \bar{T}_\nu \delta \rho \tag{5.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Physical Interpretation</h5>
            <p className="text-lg mb-2 text-justify"><Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> is the tensorial manifestation of the "force of time" that mediates causal interaction between:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>The preferred direction of time (<Latex>{String.raw`$\bar{T}_\mu$`}</Latex>).</li>
              <li>Matter/energy fluctuations (<Latex>{String.raw`$\delta J_\nu$`}</Latex>).</li>
              <li>Fluctuations of the vector field itself (<Latex>{String.raw`$\delta T_\mu$`}</Latex>).</li>
            </ul>
            <p className="text-lg mt-4 text-justify">This tensor is responsible for the system-reservoir coupling in the quantum formulation.</p>
          </div>

          {/* Section 11 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">11. Derivation of the RRT Hamiltonian Density</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Complete Legendre Transform</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Updated Conjugate Momenta</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \pi_\Phi = \frac{\partial \mathcal{L}}{\partial \dot{\Phi}} = \dot{\Phi} \tag{6.1} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \pi_{T^i} = \frac{\partial \mathcal{L}}{\partial \dot{T}_i} = -F^{0i} = -\dot{T}^i + \nabla^i T^0 \tag{6.2} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \pi_{T^0} = \frac{\partial \mathcal{L}}{\partial \dot{T}_0} \approx 0 \quad \text{(primary constraint for $m_T=0$)} \tag{6.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Total Hamiltonian Density</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{H}_{\text{RRT}} = \mathcal{H}_{\text{EH}} + \mathcal{H}_\Phi + \mathcal{H}_T + \mathcal{H}_{\text{int}} \tag{6.4} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">with:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{H}_\Phi = \frac{1}{2} \pi_\Phi^2 + \frac{1}{2} (\nabla \Phi)^2 + V(\Phi) \tag{6.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{H}_T = \frac{1}{2} (\pi_{T^i})^2 + \frac{1}{4} F_{ij} F^{ij} + \frac{m_T^2}{2} (T_0^2 + T_i T^i) + \text{gauge terms} \tag{6.6} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{H}_{\text{int}} = -\xi_\Phi \Phi \mathcal{O}_{\text{mass scale}} - \xi_T T_\mu J^\mu_{(\text{causal})} \tag{6.7} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Weak-Field Approximation for <Latex>{String.raw`$\mathcal{H}_{\text{int}}$`}</Latex></h5>
            <p className="text-lg mb-2 text-justify">When <Latex>{String.raw`$|\xi_T T_\mu J^\mu| \ll |\mathcal{H}_T|$`}</Latex> and <Latex>{String.raw`$|\xi_\Phi \Phi \mathscr{O}| \ll |\mathcal{H}_\Phi|$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{H}_{\text{int}} \approx -\xi_T T_\mu J^\mu_{(\text{causal})} \quad \text{(dominant for decoherence effects)} \tag{6.8} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Operational Form for Quantum Calculations</h5>
            <p className="text-lg mb-2 text-justify">For a local quantum system with operator <Latex>{String.raw`$A_S$`}</Latex> coupling to the field:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{\text{int}} = -\xi_T \int_{\mathcal{V}} d^3x \, A_S(x) T_\mu(x) J^\mu(x) \tag{6.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{V}$`}</Latex> is the volume of the system.</p>
          </div>

          {/* Section 12 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">12. Derivation of the Preliminary Quantization of Temporal Fields</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Canonical Quantization in Flat Spacetime</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Promotion to Operators</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{\Phi}(\mathbf{x}) \rightarrow \text{scalar operator} \tag{7.1} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \hat{T}_\mu(\mathbf{x}) \rightarrow \text{vector operator} \tag{7.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Commutation Relations</h5>
            <p className="text-lg mb-2 text-justify">For the vector field (Proca or Stueckelberg-type quantization):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ [\hat{T}_i(\mathbf{x}), \hat{\pi}_{T^j}(\mathbf{y})] = i\hbar \delta_{ij} \delta^3(\mathbf{x} - \mathbf{y}) \tag{7.3} $$`}</Latex><br/>
              <Latex>{String.raw`$$ [\hat{T}_0(\mathbf{x}), \hat{\pi}_{T^0}(\mathbf{y})] = i\hbar \delta^3(\mathbf{x} - \mathbf{y}) \quad \text{(if $m_T \neq 0$)} \tag{7.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Causal Vacuum State</h5>
            <p className="text-lg mb-2 text-justify">The vacuum state <Latex>{String.raw`$|0_T\rangle$`}</Latex> is defined by:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{T}_\mu |0_T\rangle = \bar{T}_\mu |0_T\rangle \tag{7.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\bar{T}_\mu \neq 0$`}</Latex> is the non-zero expectation value that breaks Lorentzian isotropy. This is a spontaneous symmetry breaking.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Mode Expansion with Non-Zero Background</h5>
            <p className="text-lg mb-2 text-justify">We write:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{T}_\mu(x) = \bar{T}_\mu + \delta\hat{T}_\mu(x) \tag{7.6} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">where <Latex>{String.raw`$\delta\hat{T}_\mu$`}</Latex> are fluctuation operators with the usual expansion:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \delta\hat{T}_\mu(x) = \sum_{\lambda=1}^3 \int \frac{d^3k}{(2\pi)^3} \frac{1}{\sqrt{2\omega_k}} \left[ \epsilon_\mu^{(\lambda)}(k) a^{(\lambda)}(\mathbf{k}) e^{ik\cdot x} + \text{h.c.} \right] \tag{7.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$[a^{(\lambda)}(\mathbf{k}), a^{(\lambda')\dagger}(\mathbf{k}')] = \delta_{\lambda\lambda'} \delta^3(\mathbf{k}-\mathbf{k}')$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Physical Interpretation</h5>
            <p className="text-lg text-justify">The background <Latex>{String.raw`$\bar{T}_\mu$`}</Latex> defines the preferred direction of time (causal axis). The fluctuations <Latex>{String.raw`$\delta\hat{T}_\mu$`}</Latex> are the quanta of the temporal field that mediate causal interaction with quantum systems.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Propagation Speed and GW170817 Compatibility</h5>
            <p className="text-lg mb-2 text-justify">In the high-energy regime (UV), the effective mass of the <Latex>{String.raw`$T_\mu$`}</Latex> field becomes negligible (<Latex>{String.raw`$m_T \to 0$`}</Latex>), ensuring that the propagation speed of causal perturbations coincides with the speed of light (<Latex>{String.raw`$c_{causal} = c$`}</Latex>).</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \square \delta T_\mu \approx 0 \tag{7.8} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">Consequently, RRT is compatible with observations of the GW170817 event (binary neutron star merger), where the arrival time difference between gravitational waves and gamma rays was less than 2 seconds over a travel distance of 130 million years. RRT predicts that temporal "drag" affects the wave's phase, but not its group velocity in vacuum.</p>
          </div>

          {/* Section 13 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">13. Derivation of the System-Reservoir Form with Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Reduction to the Canonical Formalism with Temporal Evolution</h4>
            <p className="text-lg mb-4 text-justify">This is the central derivation connecting RRT with the open systems formalism, incorporating the gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>.</p>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Causal Reservoir Operator</h5>
            <p className="text-lg mb-2 text-justify">We define the reservoir operator as the component of the vector field that couples linearly:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{B}_{\text{AC}}(x) = \xi_T \, \delta\hat{T}_\mu(x) \bar{J}^\mu \tag{8.1} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">Or, more generally, if <Latex>{String.raw`$A_S$`}</Latex> is the system operator:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{B}_{\text{AC}}(x) = \xi_T \, \delta\hat{T}_\mu(x) \quad \text{(for $A_S \otimes \hat{B}_{\text{AC}}$ coupling)} \tag{8.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Modal Expansion with Redshift Dependence</h5>
            <p className="text-lg mb-2 text-justify">Due to cosmic expansion, modes have time-dependent frequencies. In conformal coordinates <Latex>{String.raw`$\eta$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \delta\hat{T}_\mu(\eta, \mathbf{x}) = \sum_{\lambda} \int \frac{d^3k}{(2\pi)^3} \frac{1}{\sqrt{2\omega_k(\eta)}} \left[ \epsilon_\mu^{(\lambda)}(k) a^{(\lambda)}(\mathbf{k}) e^{i\mathbf{k}\cdot\mathbf{x} - i\int^{\eta} \omega_k(\eta') d\eta'} + \text{h.c.} \right] \tag{8.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Interaction Hamiltonian in System-Reservoir Form</h5>
            <p className="text-lg mb-2 text-justify">For a system with operator <Latex>{String.raw`$A_S$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{\text{int}}(t) = A_S \otimes \sum_{\lambda} \int \frac{d^3k}{(2\pi)^3} \left[ g_k^{(\lambda)}(t) a^{(\lambda)}(\mathbf{k}) e^{-i\int^t \omega_k(t') dt'} + \text{h.c.} \right] \tag{8.4} $$`}</Latex><br/>
              <Latex>{String.raw`$$ g_k^{(\lambda)}(t) = \xi_T \frac{\epsilon_\mu^{(\lambda)}(k) \bar{J}^\mu}{\sqrt{2\omega_k(t)}} \tilde{A}_S(\mathbf{k}) \tag{8.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\tilde{A}_S(\mathbf{k})$`}</Latex> is the spatial Fourier transform of the system operator.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Incorporation of the <Latex>{String.raw`$D(z)$`}</Latex> Gradient</h5>
            <p className="text-lg mb-2 text-justify">The observed gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> emerges naturally when considering the temporal evolution of the coupling coefficients:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ g_k^{(\lambda)}(t) = g_k^{(\lambda)}(0) \cdot (1 + z(t))^{\gamma_{\text{grad}}} \tag{8.6} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">with <Latex>{String.raw`$\gamma_{\text{grad}} \approx 1$`}</Latex> to reproduce <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>. The linear dependence on <Latex>{String.raw`$z$`}</Latex> arises from integration along the line of sight:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta \mu_T(z, \theta) = \int_0^z \frac{dz'}{H(z')} \, \xi_T(z') \, \bar{T}_\mu(z') k^\mu \cdot \cos\theta \approx D_0 \cdot z \cdot \cos\theta \tag{8.7} $$`}</Latex>
            </div>
            <p className="text-lg mt-2 text-justify"><strong>Note:</strong> The value of <Latex>{String.raw`$D_0$`}</Latex> is now calibrated by the updated Golden Triad data, with a weighted average <Latex>{String.raw`$D_0 = 0.794 \pm 0.003$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Cosmic Precession</h5>
            <p className="text-lg mb-2 text-justify">The direction of the causal vector evolves with redshift:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{T}_\mu(z) = R_{\mu\nu}(z) \hat{T}_\nu(0) \tag{8.8} $$`}</Latex>
            </div>
            <p className="text-lg text-justify mb-4">with the rotation matrix <Latex>{String.raw`$R_{\mu\nu}(z)$`}</Latex> generating the observed precession <Latex>{String.raw`$\theta_T(z) = \theta_0 + \omega_p z$`}</Latex>.</p>
            <p className="text-lg text-justify mb-4"><strong>Geometric Implication of Precession</strong>: Since the direction of the causal axis <Latex>{String.raw`$\theta_T(z)$`}</Latex> rotates following its precessional rate, the Particle Horizon in RRT assumes the topology of a <strong>Causal Spiral</strong>. Photons originating from high redshifts do not follow straight Euclidean geodesics but rather precessional trajectories. At <Latex>{String.raw`$z \approx 1100$`}</Latex> (CMB), the precession frequency exceeds the diffusion scale, resulting in the phase cancellation that preserves the small-scale isotropy measured by the Planck satellite, while allowing for the emergence of the 'Axis of Evil' at large scales (<Latex>{String.raw`$l < 20$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Final Discretized Form</h5>
            <p className="text-lg mb-2 text-justify">In finite volume <Latex>{String.raw`$V$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{\text{int}}(t) = \hbar A_S \otimes \sum_{k,\lambda} \left[ g_{k}^{(\lambda)}(t) b_{k}^{(\lambda)} e^{-i\omega_k t} + \text{h.c.} \right] \tag{8.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$[b_{k}^{(\lambda)}, b_{k'}^{(\lambda')\dagger}] = \delta_{kk'} \delta_{\lambda\lambda'}$`}</Latex> and coefficients <Latex>{String.raw`$g_{k}^{(\lambda)}(t)$`}</Latex> carrying gradient and precession information.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Gravitational Phase Delay (<Latex>{String.raw`$\Delta \tau$`}</Latex>)</h5>
            <p className="text-lg mb-2 text-justify">Unlike the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model, RRT predicts that <Latex>{String.raw`$\beta$`}</Latex> viscosity induces an accumulated delay in the propagation of metric information:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta \tau = \frac{\beta}{c} \int_0^{D_L} \eta_C(z') dr' \tag{7.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">Theoretical analysis of the gravitational wave propagation confirms that gravity, like light, is subject to the phase impedance of the viscous vacuum, predicting a systematic bias in deep-space measurements.</p>
          </div>

          {/* Section 14 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">14. Derivation of the Baryonic Neutrality Principle (BNP) in the Quantum Formulation</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Zero Coupling Condition for Baryonic Matter</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Operational Formulation</h5>
            <p className="text-lg mb-2 text-justify">For any state <Latex>{String.raw`$|\psi_{\text{bar}}\rangle$`}</Latex> of pure baryonic matter:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle \psi_{\text{bar}} | \xi_T \hat{T}_\mu \hat{J}^\mu_{(\text{causal})} | \psi_{\text{bar}} \rangle = 0 \tag{9.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Implementation via Symmetry</h5>
            <p className="text-lg mb-2 text-justify">This can be ensured by imposing that the baryonic current operator be orthogonal to the causal vector:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \hat{J}^\mu_{(\text{bar})} \bar{T}_\mu = 0 \tag{9.2} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">Or alternatively, that the total temporal charge be zero:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ Q_T^{\text{(bar)}} = \int d^3x \sqrt{-g} \, \hat{J}^0_{(\text{bar})} = 0 \tag{9.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Consequences for the S-Matrix</h5>
            <p className="text-lg mb-2 text-justify">The scattering matrix between baryonic states via the exchange of <Latex>{String.raw`$T_\mu$`}</Latex> field quanta is suppressed:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle f_{\text{bar}} | S | i_{\text{bar}} \rangle_{T-\text{exchange}} \approx 0 \tag{9.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Preservation in Quantum Loops</h5>
            <p className="text-lg text-justify">The BNP must be preserved by renormalization, which requires counter-terms to respect condition (9.1). This can be ensured by an appropriate discrete or gauge symmetry.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Physical Interpretation</h5>
            <p className="text-lg text-justify">The BNP is the mechanism allowing the temporal field to have strong cosmological effects (dark matter/energy) while remaining "invisible" in laboratory gravity tests.</p>
          </div>

        </section>

        {/* =======================================================
            BLOCK 2: Influence Functional and Correlation Functions
            ======================================================= */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">
            BLOCK 2: Influence Functional and Correlation Functions in RRT
          </h2>

          <ImagePanel src="/imagens/8.png" alt="Influence Functional" caption="Quantum Decoherence: The causal reservoir interacting with local quantum systems." themeColor="var(--theme-color)" />

          <p className="text-lg mb-8 text-justify">
            <strong>Conceptual Transition</strong>: We now move from the fundamental formulation of RRT to the derivation of the influence functional, which encodes the effects of the causal reservoir (the <Latex>{String.raw`$T_\mu$`}</Latex> field with gradient and precession) on the quantum system's dynamics. The primary novelty is the explicit dependence on redshift/cosmic time in the coupling coefficients.
          </p>

          {/* Section 15 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">15. Derivation of the Temporal Interaction Action with Cosmic Evolution</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Temporal Integration of the Hamiltonian with Gradient</h4>
            <p className="text-lg mb-4 text-justify">The interaction action now incorporates the temporal evolution of coefficients due to cosmic expansion and the gradient.</p>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Definition of the Interaction Action</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}} = \int_{t_0}^{t} d\tau \, H_{\text{int}}(\tau) \tag{10.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Substitution of the Updated System-Reservoir Form</h5>
            <p className="text-lg mb-2 text-justify">Using (8.9) with time-dependent coefficients:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}} = \int_{t_0}^{t} d\tau \, \hbar A_S(\tau) \otimes \sum_{k,\lambda} \left[ g_{k}^{(\lambda)}(\tau) b_{k}^{(\lambda)} e^{-i\int^{\tau} \omega_k(\tau') d\tau'} + \text{h.c.} \right] \tag{10.2} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}} = \hbar \sum_{k,\lambda} \int_{t_0}^{t} d\tau \, A_S(\tau) \left[ g_{k}^{(\lambda)}(\tau) b_{k}^{(\lambda)} e^{-i\Omega_k(\tau)} + g_{k}^{(\lambda)*}(\tau) b_{k}^{(\lambda)\dagger} e^{i\Omega_k(\tau)} \right] \tag{10.3} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\Omega_k(\tau) = \int^{\tau} \omega_k(\tau') d\tau'$`}</Latex> is the accumulated phase.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Parametric Form of the Coefficient with Gradient</h5>
            <p className="text-lg mb-2 text-justify">Based on (8.6), we assume:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ g_{k}^{(\lambda)}(t) = g_{k0}^{(\lambda)} \cdot (1 + z(t))^{\gamma_k} \tag{10.4} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">To reproduce <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>, we require <Latex>{String.raw`$\gamma_k \approx 1$`}</Latex> for low-frequency modes dominating large-scale interaction. More precisely:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ g_{k}^{(\lambda)}(t) = g_{k0}^{(\lambda)} \left[ 1 + \frac{D_0}{c} \int_{t_0}^{t} H(t') dt' \cdot \cos\theta_k \right] \tag{10.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\theta_k$`}</Latex> is the angle between <Latex>{String.raw`$\mathbf{k}$`}</Latex> and the causal vector direction <Latex>{String.raw`$\hat{T}$`}</Latex>.</p>
            <p className="text-lg mt-2 text-justify"><strong>Note:</strong> The value of <Latex>{String.raw`$D_0$`}</Latex> in this expression is calibrated by the Golden Triad (<Latex>{String.raw`$D_0 = 0.794 \pm 0.003$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Operator Separation</h5>
            <p className="text-lg mb-2 text-justify">System and reservoir operators commute at equal times:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ [A_S(\tau), b_{k}^{(\lambda)}] = 0, \quad [A_S(\tau), b_{k}^{(\lambda)\dagger}] = 0 \tag{10.6} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Final Form of the Action</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}} = \hbar \sum_{k,\lambda} \left[ b_{k}^{(\lambda)} I_{k}^{(\lambda)}(t,t_0) + b_{k}^{(\lambda)\dagger} I_{k}^{(\lambda)*}(t,t_0) \right] \tag{10.7} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">with modified temporal integrals:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ I_{k}^{(\lambda)}(t,t_0) = \int_{t_0}^{t} d\tau \, A_S(\tau) g_{k}^{(\lambda)}(\tau) e^{-i\Omega_k(\tau)} \tag{10.8} $$`}</Latex>
            </div>
            <p className="text-lg mt-4 text-justify"><strong>Physical Interpretation</strong>: The action represents the accumulated coupling between the system and the causal reservoir, with increasing weight due to the <Latex>{String.raw`$D_0 \cdot z$`}</Latex> gradient. The <Latex>{String.raw`$(1+z)^{\gamma_k}$`}</Latex> term encapsulates the "causal memory" accumulated over cosmic history.</p>
          </div>

          {/* Section 16 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">16. Derivation of the Influence Functional Definition for Cosmic Reservoir</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Trace over <Latex>{String.raw`$T_\mu$`}</Latex> Field Degrees of Freedom</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Updated Formal Definition</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] = \text{Tr}_{T} \left[ \exp\left( -\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S] \right) \rho_T \exp\left( \frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S'] \right) \right] \tag{11.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\rho_T$`}</Latex> is the state of the <Latex>{String.raw`$T_\mu$`}</Latex> field (generally a thermal state with temperature <Latex>{String.raw`$T_{\text{causal}}$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Cosmic Reservoir State</h5>
            <p className="text-lg mb-2 text-justify">For the <Latex>{String.raw`$T_\mu$`}</Latex> vector field with non-zero background:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_T = \frac{e^{-\beta H_T}}{\text{Tr}[e^{-\beta H_T}]}, \quad \beta = (k_B T_{\text{causal}})^{-1} \tag{11.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$H_T$`}</Latex> given by (6.6). The thermal state is defined relative to fluctuations <Latex>{String.raw`$\delta T_\mu$`}</Latex>, not including the background <Latex>{String.raw`$\bar{T}_\mu$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Modified Evolution Operators</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ U_{A_S}(t,t_0) = \exp\left( -\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S] \right) \tag{11.3} $$`}</Latex><br/>
              <Latex>{String.raw`$$ U_{A_S'}(t,t_0) = \exp\left( \frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S'] \right) \tag{11.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Interpretation as Amplitude</h5>
            <p className="text-lg text-justify"><Latex>{String.raw`$\mathcal{F}[A_S, A_S']$`}</Latex> represents the transition amplitude of the <Latex>{String.raw`$T_\mu$`}</Latex> field under the influence of histories <Latex>{String.raw`$A_S(\tau)$`}</Latex> and <Latex>{String.raw`$A_S'(\tau)$`}</Latex>. The redshift dependence in <Latex>{String.raw`$g_k(\tau)$`}</Latex> causes the functional to "sense" the cosmic history of the coupling.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Normalization Condition</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$A_S = A_S'$`}</Latex>, we have:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S] = \text{Tr}_T[\rho_T] = 1 \tag{11.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Conjugation Property</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S']^* = \mathcal{F}[A_S', A_S] \tag{11.6} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Connection with the Path Integral in RRT</h5>
            <p className="text-lg mb-2 text-justify">In the path integral formulation of RRT, the functional arises when tracing over <Latex>{String.raw`$\delta T_\mu$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ K(q_f, t; q_i, 0) = \int \mathcal{D}q \, e^{\frac{i}{\hbar} S_S[q]} \mathcal{F}[q] \cdot e^{\frac{i}{\hbar} S_{\text{back}}[\bar{T}]} \tag{11.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$S_{\text{back}}[\bar{T}]$`}</Latex> is the action of the <Latex>{String.raw`$\bar{T}_\mu$`}</Latex> background, providing additional direction-dependent phase factors (precession effect).</p>
          </div>

          {/* Section 17 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">17. Derivation of the Second-Order Expansion with Time-Dependent Coefficients</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Development of the Dyson Series for Non-Stationary Coupling</h4>
            <p className="text-lg mb-4 text-justify">We expand the exponentials to second order, now with time-dependent <Latex>{String.raw`$g_k(t)$`}</Latex> coefficients.</p>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Expansion of Evolution Operators</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ e^{-\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S]} \approx 1 - \frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S] - \frac{1}{2\hbar^2} \mathcal{S}_{\text{int}}[A_S]^2 \tag{12.1} $$`}</Latex><br/>
              <Latex>{String.raw`$$ e^{\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S']} \approx 1 + \frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S'] - \frac{1}{2\hbar^2} \mathcal{S}_{\text{int}}[A_S']^2 \tag{12.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Operator Product</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ e^{-\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S]} \rho_T e^{\frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S']} = \rho_T + \frac{i}{\hbar} \mathcal{S}_{\text{int}}[A_S'] \rho_T - \frac{i}{\hbar} \rho_T \mathcal{S}_{\text{int}}[A_S] $$`}</Latex>
              <Latex>{String.raw`$$ - \frac{1}{2\hbar^2} \mathcal{S}_{\text{int}}[A_S']^2 \rho_T + \frac{1}{\hbar^2} \mathcal{S}_{\text{int}}[A_S'] \rho_T \mathcal{S}_{\text{int}}[A_S] - \frac{1}{2\hbar^2} \rho_T \mathcal{S}_{\text{int}}[A_S]^2 + \mathcal{O}(\xi_T^3) \tag{12.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Trace over the Reservoir</h5>
            <p className="text-lg mb-2 text-justify">Taking the trace and using <Latex>{String.raw`$\text{Tr}_T[b_{k}^{(\lambda)} \rho_T] = 0$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] \approx 1 - \frac{1}{2\hbar^2} \text{Tr}_T[\mathcal{S}_{\text{int}}[A_S]^2 \rho_T] $$`}</Latex>
              <Latex>{String.raw`$$ + \frac{1}{\hbar^2} \text{Tr}_T[\mathcal{S}_{\text{int}}[A_S] \rho_T \mathcal{S}_{\text{int}}[A_S']] - \frac{1}{2\hbar^2} \text{Tr}_T[\rho_T \mathcal{S}_{\text{int}}[A_S']^2] \tag{12.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Term Simplification</h5>
            <p className="text-lg mb-2 text-justify">Defining expectation values <Latex>{String.raw`$\langle \cdot \rangle_T = \text{Tr}_T[\cdot \rho_T]$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \text{Tr}_T[\mathcal{S}_{\text{int}}[A_S]^2 \rho_T] = \langle \mathcal{S}_{\text{int}}[A_S]^2 \rangle_T \tag{12.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \text{Tr}_T[\rho_T \mathcal{S}_{\text{int}}[A_S']^2] = \langle \mathcal{S}_{\text{int}}[A_S']^2 \rangle_T \tag{12.6} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \text{Tr}_T[\mathcal{S}_{\text{int}}[A_S] \rho_T \mathcal{S}_{\text{int}}[A_S']] = \langle \mathcal{S}_{\text{int}}[A_S] \mathcal{S}_{\text{int}}[A_S'] \rangle_T \tag{12.7} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Compact Form</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] \approx 1 - \frac{1}{2\hbar^2} \left( \langle \mathcal{S}_{\text{int}}[A_S]^2 \rangle_T + \langle \mathcal{S}_{\text{int}}[A_S']^2 \rangle_T - 2\langle \mathcal{S}_{\text{int}}[A_S] \mathcal{S}_{\text{int}}[A_S'] \rangle_T \right) \tag{12.8} $$`}</Latex>
            </div>
          </div>

          {/* Section 18 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">18. Derivation of the Expression in Terms of Anisotropic Correlation Functions</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Identification of Correlation Functions with Gradient</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Expression of the Action in Terms of Operators</h5>
            <p className="text-lg mb-2 text-justify">Using (10.3):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}}[A_S] = \int_{t_0}^{t} d\tau \, A_S(\tau) B(\tau) \tag{13.1} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}}[A_S'] = \int_{t_0}^{t} d\tau \, A_S'(\tau) B(\tau) \tag{13.2} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">where we define the reservoir operator:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ B(\tau) = \hbar \sum_{k,\lambda} \left[ g_{k}^{(\lambda)}(\tau) b_{k}^{(\lambda)} e^{-i\Omega_k(\tau)} + \text{h.c.} \right] \tag{13.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Product of Actions</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{S}_{\text{int}}[A_S] \mathcal{S}_{\text{int}}[A_S'] = \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, A_S(\tau) A_S'(\tau') B(\tau) B(\tau') \tag{13.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Thermal Expectation Values</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle \mathcal{S}_{\text{int}}[A_S]^2 \rangle_T = \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, A_S(\tau) A_S(\tau') \langle B(\tau) B(\tau') \rangle_T \tag{13.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle \mathcal{S}_{\text{int}}[A_S']^2 \rangle_T = \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, A_S'(\tau) A_S'(\tau') \langle B(\tau) B(\tau') \rangle_T \tag{13.6} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle \mathcal{S}_{\text{int}}[A_S] \mathcal{S}_{\text{int}}[A_S'] \rangle_T = \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, A_S(\tau) A_S'(\tau') \langle B(\tau) B(\tau') \rangle_T \tag{13.7} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Definition of the Time-Dependent Correlation Function</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = \langle B(\tau) B(\tau') \rangle_T \tag{13.8} $$`}</Latex>
            </div>
            <p className="text-lg text-justify"><strong>Important</strong>: Due to the time dependence in <Latex>{String.raw`$g_k(\tau)$`}</Latex>, <Latex>{String.raw`$\mathcal{C}(\tau, \tau')$`}</Latex> is no longer a function only of <Latex>{String.raw`$\tau-\tau'$`}</Latex>, but of both times separately. However, we can write:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = f(\tau, \tau') \, C_0(\tau - \tau') \tag{13.9} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">where <Latex>{String.raw`$C_0(\Delta\tau)$`}</Latex> is the stationary correlation function and <Latex>{String.raw`$f(\tau, \tau')$`}</Latex> captures the evolution due to the gradient:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ f(\tau, \tau') = \left[ (1+z(\tau))(1+z(\tau')) \right]^{\gamma/2} \tag{13.10} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$\gamma \approx 1$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Final Influence Functional Expression</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] \approx 1 - \frac{1}{2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau, \tau') \big[ A_S(\tau) A_S(\tau') C_0(\tau - \tau') $$`}</Latex>
              <Latex>{String.raw`$$ + A_S'(\tau) A_S'(\tau') C_0^*(\tau - \tau') - 2 A_S(\tau) A_S'(\tau') C_0(\tau - \tau') \big] \tag{13.11} $$`}</Latex>
            </div>
          </div>

          {/* Section 19 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">19. Derivation of the Exponential Form via Generalized Cumulant Theorem</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Re-exponentiation for Non-Stationary Gaussian Processes</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Cumulant Theorem for Non-Stationary Gaussian Processes</h5>
            <p className="text-lg mb-2 text-justify">For a Gaussian variable <Latex>{String.raw`$X(t)$`}</Latex> with <Latex>{String.raw`$\langle X(t) \rangle = 0$`}</Latex> but non-stationary correlations <Latex>{String.raw`$\langle X(t)X(t') \rangle$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle e^{i\int dt \, X(t)h(t)} \rangle = \exp\left[ -\frac{1}{2} \int dt \int dt' \, h(t)h(t') \langle X(t)X(t') \rangle \right] \tag{14.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Application to the Influence Functional</h5>
            <p className="text-lg mb-2 text-justify">Defining:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ X = \frac{i}{\hbar} (\mathcal{S}_{\text{int}}[A_S] - \mathcal{S}_{\text{int}}[A_S']) \tag{14.2} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">We have:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] = \langle e^{X} \rangle_T = e^{\frac{1}{2}\langle X^2 \rangle_T} \tag{14.3} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">(Note: for Gaussian variables with zero mean, all cumulants of order higher than 2 are zero).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Calculation of the Second Cumulant</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle X^2 \rangle_T = -\frac{1}{\hbar^2} \langle (\mathcal{S}_{\text{int}}[A_S] - \mathcal{S}_{\text{int}}[A_S'])^2 \rangle_T \tag{14.4a} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle X^2 \rangle_T = -\frac{1}{\hbar^2} \left( \langle \mathcal{S}_{\text{int}}[A_S]^2 \rangle_T + \langle \mathcal{S}_{\text{int}}[A_S']^2 \rangle_T - 2\langle \mathcal{S}_{\text{int}}[A_S] \mathcal{S}_{\text{int}}[A_S'] \rangle_T \right) \tag{14.4b} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Substitution of Non-Stationary Correlations</h5>
            <p className="text-lg mb-2 text-justify">Using (13.5)-(13.7):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle X^2 \rangle_T = -\frac{1}{\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau, \tau') \big[ A_S(\tau) A_S(\tau') C_0(\Delta\tau) $$`}</Latex>
              <Latex>{String.raw`$$ + A_S'(\tau) A_S'(\tau') C_0^*(\Delta\tau) - 2 A_S(\tau) A_S'(\tau') C_0(\Delta\tau) \big] \tag{14.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\Delta\tau = \tau - \tau'$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Final Exponential Form</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] \approx 1 - \frac{1}{2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau, \tau') \big[ A_S(\tau) A_S(\tau') C_0(\tau - \tau') $$`}</Latex>
              <Latex>{String.raw`$$ + A_S'(\tau) A_S'(\tau') C_0^*(\tau - \tau') - 2 A_S(\tau) A_S'(\tau') C_0(\tau - \tau') \big] \tag{13.11} $$`}</Latex>
            </div>
            <p className="text-lg mt-4 text-justify"><strong>Interpretation</strong>: The factor <Latex>{String.raw`$f(\tau, \tau')$`}</Latex> modulates the strength of correlations as the system evolves in cosmic time, implementing the <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> gradient.</p>
          </div>

          {/* Section 20 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">20. Complete Derivation of the Correlation Function with Anisotropy and Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Explicit Calculation of <Latex>{String.raw`$\mathcal{C}(\tau, \tau')$`}</Latex> for the <Latex>{String.raw`$T_\mu$`}</Latex> Field</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Definition of the Correlation Function</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = \langle B(\tau) B(\tau') \rangle_T \tag{15.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$B(\tau)$`}</Latex> given by (13.3).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Expansion of Reservoir Operators</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ B(\tau) = \hbar \sum_{k,\lambda} \left[ g_{k}^{(\lambda)}(\tau) b_{k}^{(\lambda)} e^{-i\Omega_k(\tau)} + g_{k}^{(\lambda)*}(\tau) b_{k}^{(\lambda)\dagger} e^{i\Omega_k(\tau)} \right] \tag{15.2} $$`}</Latex><br/>
              <Latex>{String.raw`$$ B(\tau') = \hbar \sum_{k',\lambda'} \left[ g_{k'}^{(\lambda')}(\tau') b_{k'}^{(\lambda')} e^{-i\Omega_{k'}(\tau')} + g_{k'}^{(\lambda')*}(\tau') b_{k'}^{(\lambda')\dagger} e^{i\Omega_{k'}(\tau')} \right] \tag{15.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Operator Product</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ B(\tau)B(\tau') = \hbar^2 \sum_{k,k'} \sum_{\lambda,\lambda'} \big[ g_{k}^{(\lambda)}(\tau) g_{k'}^{(\lambda')}(\tau') b_{k}^{(\lambda)} b_{k'}^{(\lambda')} e^{-i[\Omega_k(\tau)+\Omega_{k'}(\tau')]} $$`}</Latex>
              <Latex>{String.raw`$$ + g_{k}^{(\lambda)}(\tau) g_{k'}^{(\lambda')*}(\tau') b_{k}^{(\lambda)} b_{k'}^{(\lambda')\dagger} e^{-i[\Omega_k(\tau)-\Omega_{k'}(\tau')]} $$`}</Latex>
              <Latex>{String.raw`$$ + g_{k}^{(\lambda)*}(\tau) g_{k'}^{(\lambda')}(\tau') b_{k}^{(\lambda)\dagger} b_{k'}^{(\lambda')} e^{i[\Omega_k(\tau)-\Omega_{k'}(\tau')]} $$`}</Latex>
              <Latex>{String.raw`$$ + g_{k}^{(\lambda)*}(\tau) g_{k'}^{(\lambda')*}(\tau') b_{k}^{(\lambda)\dagger} b_{k'}^{(\lambda')\dagger} e^{i[\Omega_k(\tau)+\Omega_{k'}(\tau')]} \big] \tag{15.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Thermal Expectation Values</h5>
            <p className="text-lg mb-2 text-justify">For the <Latex>{String.raw`$T_\mu$`}</Latex> vector field in a thermal state:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \langle b_{k}^{(\lambda)} b_{k'}^{(\lambda')} \rangle_T = 0 \tag{15.5} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle b_{k}^{(\lambda)\dagger} b_{k'}^{(\lambda')\dagger} \rangle_T = 0 \tag{15.6} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle b_{k}^{(\lambda)} b_{k'}^{(\lambda')\dagger} \rangle_T = (n_k^{(\lambda)} + 1) \delta_{kk'} \delta_{\lambda\lambda'} \tag{15.7} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \langle b_{k}^{(\lambda)\dagger} b_{k'}^{(\lambda')} \rangle_T = n_k^{(\lambda)} \delta_{kk'} \delta_{\lambda\lambda'} \tag{15.8} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$n_k^{(\lambda)} = \frac{1}{e^{\beta\hbar\omega_k^{(\lambda)}} - 1}$`}</Latex> is the Bose-Einstein distribution for mode <Latex>{String.raw`$(k,\lambda)$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Non-Zero Terms</h5>
            <p className="text-lg mb-2 text-justify">Only terms with <Latex>{String.raw`$b_{k}^{(\lambda)} b_{k'}^{(\lambda')\dagger}$`}</Latex> and <Latex>{String.raw`$b_{k}^{(\lambda)\dagger} b_{k'}^{(\lambda')}$`}</Latex> contribute:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = \hbar^2 \sum_{k,\lambda} \big[ g_{k}^{(\lambda)}(\tau) g_{k}^{(\lambda)*}(\tau') (n_k^{(\lambda)} + 1) e^{-i[\Omega_k(\tau)-\Omega_k(\tau')]} $$`}</Latex>
              <Latex>{String.raw`$$ + g_{k}^{(\lambda)*}(\tau) g_{k}^{(\lambda)}(\tau') n_k^{(\lambda)} e^{i[\Omega_k(\tau)-\Omega_k(\tau')]} \big] \tag{15.9} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Simplified Form</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = \hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \left[ (n_k^{(\lambda)} + 1) e^{-i[\Omega_k(\tau)-\Omega_k(\tau')]} + n_k^{(\lambda)} e^{i[\Omega_k(\tau)-\Omega_k(\tau')]} \right] \tag{15.10} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$f_k(\tau, \tau') = (1+z(\tau))^{\gamma_k} (1+z(\tau'))^{\gamma_k}$`}</Latex> captures the gradient, and <Latex>{String.raw`$g_{k0}^{(\lambda)}$`}</Latex> are the coefficients at <Latex>{String.raw`$t=0$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Low Frequency Limit (Cosmological Scales)</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$\omega_k \ll H_0$`}</Latex>, we can approximate <Latex>{String.raw`$\Omega_k(\tau) \approx \omega_k \tau$`}</Latex> and <Latex>{String.raw`$n_k^{(\lambda)} \approx \frac{k_B T_{\text{causal}}}{\hbar\omega_k} \gg 1$`}</Latex> (classical limit):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') \approx 2\hbar k_B T_{\text{causal}} \sum_{k,\lambda} \frac{|g_{k0}^{(\lambda)}|^2}{\omega_k} f_k(\tau, \tau') \cos[\omega_k (\tau - \tau')] \tag{15.11} $$`}</Latex>
            </div>
          </div>

          {/* Section 21 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">21. Derivation of the Symmetric Component with Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Noise and Decoherence Term with Temporal Evolution</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Definition of the Symmetric Component</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{sym}}(\tau, \tau') = \frac{1}{2} [\mathcal{C}(\tau, \tau') + \mathcal{C}^*(\tau, \tau')] \tag{16.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Complex Conjugate</h5>
            <p className="text-lg mb-2 text-justify">From (15.10):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}^*(\tau, \tau') = \hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \left[ (n_k^{(\lambda)} + 1) e^{i[\Omega_k(\tau)-\Omega_k(\tau')]} + n_k^{(\lambda)} e^{-i[\Omega_k(\tau)-\Omega_k(\tau')]} \right] \tag{16.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Sum of Functions</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C} + \mathcal{C}^* = \hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \big[ (2n_k^{(\lambda)} + 1) e^{-i[\Omega_k(\tau)-\Omega_k(\tau')]} $$`}</Latex>
              <Latex>{String.raw`$$ + (2n_k^{(\lambda)} + 1) e^{i[\Omega_k(\tau)-\Omega_k(\tau')]} \big] \tag{16.3a} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{C} + \mathcal{C}^* = 2\hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') (2n_k^{(\lambda)} + 1) \cos[\Omega_k(\tau) - \Omega_k(\tau')] \tag{16.3b} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Approximation for Small Temporal Differences</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$\Delta\tau = \tau - \tau'$`}</Latex> small compared to the Hubble time <Latex>{String.raw`$H^{-1}$`}</Latex>, we have <Latex>{String.raw`$\Omega_k(\tau) - \Omega_k(\tau') \approx \omega_k(\bar{\tau}) \Delta\tau$`}</Latex>, where <Latex>{String.raw`$\bar{\tau} = (\tau+\tau')/2$`}</Latex>. Thus:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C} + \mathcal{C}^* \approx 2\hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') (2n_k^{(\lambda)} + 1) \cos[\omega_k(\bar{\tau}) \Delta\tau] \tag{16.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Final Symmetric Component</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{sym}}(\tau, \tau') = \hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') (2n_k^{(\lambda)} + 1) \cos[\omega_k(\bar{\tau}) \Delta\tau] \tag{16.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Physical Interpretation</h5>
            <p className="text-lg text-justify"><Latex>{String.raw`$\mathcal{C}_{\text{sym}}$`}</Latex> represents the quantum and thermal noise causing decoerence. The factor <Latex>{String.raw`$f_k(\tau, \tau') = (1+z(\tau))^{\gamma_k}(1+z(\tau'))^{\gamma_k}$`}</Latex> shows that noise strength <strong>grows with redshift</strong>, implementing the observed gradient. For <Latex>{String.raw`$\gamma_k \approx 1$`}</Latex>, we have <Latex>{String.raw`$f_k(\tau, \tau') \propto (1+z)^2$`}</Latex>, corresponding to <Latex>{String.raw`$D \propto z$`}</Latex>.</p>
          </div>

          {/* Section 22 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">22. Derivation of the Antisymmetric Component with Precession</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Dissipation Term and Lamb Shift with Directional Dependence</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Definition of the Antisymmetric Component</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau, \tau') = \frac{1}{2i} [\mathcal{C}(\tau, \tau') - \mathcal{C}^*(\tau, \tau')] \tag{17.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Difference of Functions</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C} - \mathcal{C}^* = \hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \left[ e^{-i\Delta\Omega} - e^{i\Delta\Omega} \right] \tag{17.2a} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{C} - \mathcal{C}^* = -2i\hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \sin[\Delta\Omega] \tag{17.2b} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\Delta\Omega = \Omega_k(\tau) - \Omega_k(\tau')$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Final Antisymmetric Component</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau, \tau') = -\hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') \sin[\Omega_k(\tau) - \Omega_k(\tau')] \tag{17.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Inclusion of Precession</h5>
            <p className="text-lg mb-2 text-justify">The cosmic precession <Latex>{String.raw`$\theta_T(z) = \theta_0 + \omega_p z$`}</Latex> modifies the coefficients through angular dependence. We can write:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ |g_{k0}^{(\lambda)}|^2 \rightarrow |g_{k0}^{(\lambda)}|^2 \cdot [1 + \alpha \cos^2(\theta_k - \theta_T(z(\bar{\tau})))] \tag{17.4} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\alpha$`}</Latex> is the measured intrinsic anisotropy, <Latex>{String.raw`$\theta_k$`}</Latex> is the direction of <Latex>{String.raw`$\mathbf{k}$`}</Latex>, and <Latex>{String.raw`$\theta_T(z)$`}</Latex> evolves with the precessional parameter <Latex>{String.raw`$\omega_p$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Complete Form with Anisotropy and Precession</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau, \tau') = -\hbar^2 \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(\tau, \tau') [1 + \alpha \cos^2(\theta_k - \theta_T(z(\bar{\tau})))] \sin[\omega_k(\bar{\tau}) \Delta\tau] \tag{17.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Physical Interpretation</h5>
            <p className="text-lg text-justify"><Latex>{String.raw`$\mathcal{C}_{\text{skew}}$`}</Latex> represents dissipative effects and contributes to the Lamb shift. The angular modulation <Latex>{String.raw`$[1 + \alpha \cos^2(\theta_k - \theta_T)]$`}</Latex> introduces directional dependence in dissipation, while the precession <Latex>{String.raw`$\theta_T(z(\bar{\tau}))$`}</Latex> causes this preferred direction to rotate with cosmic time.</p>
            
            <p className="text-lg mt-4 text-justify"><strong>Connection to Anisotropic Linear Response</strong>: The antisymmetric component is related to the reservoir's response function via generalized Kramers-Kronig relations for anisotropic media.</p>
          </div>

          {/* Section 23 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">23. Derivation of the Anisotropic Spectral Density with Evolution</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Definition and Properties of <Latex>{String.raw`$J(\omega, \theta, t)$`}</Latex> in RRT</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: General Definition of Spectral Density</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J(\omega, \theta, t) = \sum_{k,\lambda} |g_{k}^{(\lambda)}(t)|^2 \delta(\omega - \omega_k(t)) \delta_{\theta, \theta_k} \tag{18.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\theta$`}</Latex> is the angular direction and we include explicit time dependence in <Latex>{String.raw`$g_k$`}</Latex> and <Latex>{String.raw`$\omega_k$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Parametric Form with Gradient</h5>
            <p className="text-lg mb-2 text-justify">Using (8.6):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J(\omega, \theta, t) = (1+z(t))^{2\gamma} J_0(\omega, \theta) \tag{18.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$J_0(\omega, \theta)$`}</Latex> is the spectral density at <Latex>{String.raw`$t=0$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Anisotropic Form</h5>
            <p className="text-lg mb-2 text-justify">From the analysis of the SDSS SuperSet v3, we know the spectral density is modulated by:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J_0(\omega, \theta) = J_{\text{iso}}(\omega) \left[ 1 + \alpha \cos^2(\theta - \theta_0) \right] $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\alpha$`}</Latex> represents the amplitude of the intrinsic dipole. The stability of the causal vector direction (<Latex>{String.raw`$\theta_0$`}</Latex>) was subjected to a 50-iteration Jackknife stress test, resulting in strict angular dispersion (<Latex>{String.raw`$\pm 1.69^\circ$`}</Latex>). This stabilized angular dispersion, associated with the <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong>, proves that the precession phase is invariant to random data removal, shielding RRT against selection bias or local fluctuation hypotheses.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Inclusion of Precession</h5>
            <p className="text-lg mb-2 text-justify">The anisotropy direction evolves with redshift:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J(\omega, \theta, t) = (1+z(t))^{2\gamma} J_{\text{iso}}(\omega) \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t))) \right] \tag{18.4} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$\theta_T(z) = \theta_0 + \omega_p z$`}</Latex>, and <Latex>{String.raw`$\omega_p$`}</Latex> is the Cosmic Precession Rate governed by the cosmic expansion.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Continuous Representation</h5>
            <p className="text-lg mb-2 text-justify">In the continuous limit:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J(\omega, \theta, t) = (1+z(t))^{2\gamma} \int d\omega' \, \rho(\omega') |g(\omega')|^2 \delta(\omega - \omega') \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t))) \right] \tag{18.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\rho(\omega)$`}</Latex> is the density of states.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Correlation Function in terms of <Latex>{String.raw`$J(\omega, \theta, t)$`}</Latex></h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') = \int_0^\infty d\omega \int d\Omega \, J(\omega, \theta, \bar{\tau}) \left[ (n(\omega, T_{\text{causal}}) + 1) e^{-i\omega(\tau-\tau')} + n(\omega, T_{\text{causal}}) e^{i\omega(\tau-\tau')} \right] $$`}</Latex>
              <Latex>{String.raw`$$ \times (1+z(\tau))^\gamma (1+z(\tau'))^\gamma \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(\bar{\tau}))) \right] \tag{18.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$d\Omega$`}</Latex> is the solid angle element, <Latex>{String.raw`$\bar{\tau} = (\tau+\tau')/2$`}</Latex>, and <Latex>{String.raw`$n(\omega, T) = (e^{\beta\hbar\omega}-1)^{-1}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Typical Forms of Isotropic Spectral Density</h5>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>Ohmic</strong>: <Latex>{String.raw`$J_{\text{iso}}(\omega) = \eta\omega e^{-\omega/\omega_c}$`}</Latex></li>
              <li><strong>Super-Ohmic</strong>: <Latex>{String.raw`$J_{\text{iso}}(\omega) = \eta\omega^s e^{-\omega/\omega_c}$`}</Latex> with <Latex>{String.raw`$s > 1$`}</Latex></li>
              <li><strong>Sub-Ohmic</strong>: <Latex>{String.raw`$J_{\text{iso}}(\omega) = \eta\omega^s e^{-\omega/\omega_c}$`}</Latex> with <Latex>{String.raw`$s < 1$`}</Latex></li>
            </ul>
            <p className="text-lg mt-4 text-justify">In RRT, cosmological data suggest <Latex>{String.raw`$s \approx 1$`}</Latex> (Ohmic) for <Latex>{String.raw`$\omega \ll \omega_c$`}</Latex>, with <Latex>{String.raw`$\omega_c \sim H_0$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Cosmic Cut-off Frequency</h5>
            <p className="text-lg text-justify"><Latex>{String.raw`$\omega_c$`}</Latex> represents the maximum frequency scale of the causal reservoir, potentially related to the inverse Planck time or the inverse Hubble radius.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 9: Final Spectral Density for Calculations</h5>
            <p className="text-lg mb-2 text-justify">For most cosmological applications, we apply the generalized form:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ J(\omega, \theta, t) = \eta \omega e^{-\omega/\omega_c} (1+z(t))^{2} \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t))) \right] \tag{18.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where the <Latex>{String.raw`$(1+z)^2$`}</Latex> factor derives from the structural gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>, and the Cortez Precession is encapsulated in the non-stationary angular argument.</p>
            <p className="text-lg mt-4 text-justify"><strong>Connection to Cosmic Anisotropy</strong>: The form (18.7) mathematically encapsulates all anisotropy observations: the linear gradient in <Latex>{String.raw`$z$`}</Latex>, the intrinsic anisotropy <Latex>{String.raw`$\alpha$`}</Latex>, the initial direction <Latex>{String.raw`$\theta_0$`}</Latex>, and the precession <Latex>{String.raw`$\omega_p$`}</Latex>. This is the fundamental bridge between open systems formalism and observational cosmology.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 10: The Planck Verdict (Primordial Asymmetry)</h5>
            <p className="text-lg text-justify">The analysis of low multipoles (<Latex>{String.raw`$\ell < 20$`}</Latex>) of the CMB reveals a <strong>98.36%</strong> alignment with the Cortez Axis. In Phase 0 (Primordial Ocean), the absence of baryonic islands allowed <Latex>{String.raw`$\beta$`}</Latex> viscosity to establish a pure preferred direction. The "Axis of Evil" is the scar left by the initial viscous flow, proving RRT as the universe's origin geometry.</p>
          </div>

          <p className="text-lg text-justify mb-8">This destructive interference explains why isotropic audits fail. The Cortez Rotation requires that the analysis be stratified. Without the phase correction, the statistical signal of <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> identified in the SDSS resonance stratum would be diluted into noise, as demonstrated by the marginal significance in noisy photometric catalogs.</p>

        </section>

        {/* =======================================================
            BLOCK 3: Canonical Expansion and Master Equation
            ======================================================= */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">
            BLOCK 3: Canonical Expansion and Master Equation in RRT
          </h2>

          <ImagePanel src="/imagens/9.png" alt="Master Equation" caption="The RRT Master Equation: Tracing the evolution of the density matrix in a precessing frame." themeColor="var(--theme-color)" />

          <p className="text-lg mb-8 text-justify">
            <strong>Conceptual Transition</strong>: With the influence functional derived, we now move to the derivation of the master equation for the density matrix of the system coupled to the causal reservoir. The crucial novelty is that the dissipation and decoherence coefficients now possess temporal (due to the gradient) and angular (due to anisotropy and precession) dependence.
          </p>

          {/* Section: Mean and Difference Basis */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Mean and Difference Basis with Cosmic Dependence</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Variable Change in Path Space with Cosmic Time</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Variable Definition</h5>
            <p className="text-lg mb-2 text-justify">We introduce variables that separate the mean classical trajectory from quantum fluctuations, now with cosmic time awareness:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_m(\tau) = \frac{1}{2} (A_S(\tau) + A_S'(\tau)) \tag{19.1} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \Delta A(\tau) = A_S(\tau) - A_S'(\tau) \tag{19.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Inverse Transformation</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_S(\tau) = A_m(\tau) + \frac{1}{2} \Delta A(\tau) \tag{19.3} $$`}</Latex><br/>
              <Latex>{String.raw`$$ A_S'(\tau) = A_m(\tau) - \frac{1}{2} \Delta A(\tau) \tag{19.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Transformation Jacobian</h5>
            <p className="text-lg mb-2 text-justify">The transformation is linear with determinant 1; therefore, the Jacobian is unitary:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{D}A_S \mathcal{D}A_S' = \mathcal{D}A_m \mathcal{D}\Delta A \tag{19.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Physical Interpretation in RRT</h5>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><Latex>{String.raw`$A_m(\tau)$`}</Latex>: Represents the mean classical trajectory of the system observable.</li>
              <li><Latex>{String.raw`$\Delta A(\tau)$`}</Latex>: Represents the quantum fluctuations (coherences) whose suppression defines decoherence.</li>
            </ul>
            <p className="text-lg mt-4 text-justify">In RRT, both may have implicit dependence on cosmic time through their evolution in the expanding universe.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Boundary Conditions for the Density Matrix</h5>
            <p className="text-lg mb-2 text-justify">For the evolution of the density matrix <Latex>{String.raw`$\rho_S$`}</Latex>, we have:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Delta A(t_0) = \Delta A(t) = 0 \tag{19.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">while <Latex>{String.raw`$A_m$`}</Latex> has free boundary conditions. These conditions reflect that in the path integral formalism for <Latex>{String.raw`$\rho_S$`}</Latex>, the "forward" and "backward" trajectories coincide at the initial and final times.</p>
          </div>

          {/* Section: Real Component */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Real Component <Latex>{String.raw`$\mathcal{I}_{\text{Re}}$`}</Latex> with Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Decoherence Term in the Canonical Basis with Temporal Evolution</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Original Functional Expression</h5>
            <p className="text-lg mb-2 text-justify">From (14.6) and (16.5), the real part of the exponent is:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{I}_{\text{Re}} = -\frac{1}{2\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau,\tau') \mathcal{C}_{\text{sym}}(\tau,\tau') \big[ A_S(\tau)A_S(\tau') $$`}</Latex>
              <Latex>{String.raw`$$ + A_S'(\tau)A_S'(\tau') - 2A_S(\tau)A_S'(\tau') \big] \tag{20.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$f(\tau,\tau') = (1+z(\tau))^\gamma (1+z(\tau'))^\gamma$`}</Latex> and <Latex>{String.raw`$\mathcal{C}_{\text{sym}}$`}</Latex> given by (16.5).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Substitution into the Canonical Basis</h5>
            <p className="text-lg text-justify">Substituting <Latex>{String.raw`$A_S = A_m + \frac{1}{2}\Delta A$`}</Latex> and <Latex>{String.raw`$A_S' = A_m - \frac{1}{2}\Delta A$`}</Latex>:</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Term-by-Term Development</h5>
            <p className="text-lg mb-2 text-justify">We calculate each term separately:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_SA_S = A_mA_m' + \frac{1}{2}A_m\Delta A' + \frac{1}{2}\Delta A A_m' + \frac{1}{4}\Delta A\Delta A' \tag{20.2} $$`}</Latex>
            </div>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_S'A_S' = A_mA_m' - \frac{1}{2}A_m\Delta A' - \frac{1}{2}\Delta A A_m' + \frac{1}{4}\Delta A\Delta A' \tag{20.3} $$`}</Latex>
            </div>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ -2A_SA_S' = -2A_mA_m' + A_m\Delta A' - \Delta A A_m' + \frac{1}{2}\Delta A\Delta A' \tag{20.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Sum of All Terms</h5>
            <p className="text-lg mb-2 text-justify">Summing (20.2), (20.3), and (20.4):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ [A_SA_S + A_S'A_S' - 2A_SA_S'] = \Delta A(\tau)\Delta A(\tau') \tag{20.5} $$`}</Latex>
            </div>
            <p className="text-lg mt-4 text-justify"><strong>Note</strong>: The <Latex>{String.raw`$A_m$`}</Latex> terms cancel out completely! This is a fundamental result: only quantum fluctuations <Latex>{String.raw`$\Delta A$`}</Latex> contribute to decoherence.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Final Result for <Latex>{String.raw`$\mathcal{I}_{\text{Re}}$`}</Latex></h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{I}_{\text{Re}} = -\frac{1}{2\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau,\tau') \mathcal{C}_{\text{sym}}(\tau,\tau') \Delta A(\tau) \Delta A(\tau') \tag{20.6} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Form with Spectral Density</h5>
            <p className="text-lg mb-2 text-justify">Substituting <Latex>{String.raw`$\mathcal{C}_{\text{sym}}$`}</Latex> from (16.5):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{I}_{\text{Re}} = -\frac{1}{2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, \Delta A(\tau)\Delta A(\tau') \int_0^\infty d\omega \, J(\omega,\theta,\bar{\tau}) (2n(\omega)+1) \cos[\omega(\tau-\tau')] \tag{20.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$J(\omega,\theta,t)$`}</Latex> is given by (18.7) and <Latex>{String.raw`$\bar{\tau} = (\tau+\tau')/2$`}</Latex>.</p>

            <p className="text-lg mt-6 text-justify"><strong>Interpretation</strong>: Decoherence is caused by the accumulation of correlations between quantum fluctuations <Latex>{String.raw`$\Delta A$`}</Latex> at different times, weighted by the reservoir's correlation function. The factor <Latex>{String.raw`$f(\tau,\tau')$`}</Latex> causes the decoherence strength to <strong>increase with redshift</strong>, implementing the <Latex>{String.raw`$D \propto z$`}</Latex> gradient.</p>
            <p className="text-lg mt-2 text-justify"><strong>Updated Note</strong>: With the new Golden Triad data, the <Latex>{String.raw`$(1+z)^2$`}</Latex> evolution is confirmed with 0.5% precision up to <Latex>{String.raw`$z=2.5$`}</Latex>.</p>
          </div>

          {/* Section: Imaginary Component */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Imaginary Component <Latex>{String.raw`$\mathcal{I}_{\text{Im}}$`}</Latex> with Precession</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Dissipation Term in the Canonical Basis with Angular Dependence</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Original Imaginary Part Expression</h5>
            <p className="text-lg mb-2 text-justify">From (14.6) and (17.5):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ i\mathcal{I}_{\text{Im}} = -\frac{1}{2\hbar^2} \int d\tau d\tau' \, f(\tau,\tau') i\mathcal{C}_{\text{skew}}(\tau,\tau') \big[ A_S(\tau)A_S(\tau') $$`}</Latex>
              <Latex>{String.raw`$$ - A_S'(\tau)A_S'(\tau') - 2A_S(\tau)A_S'(\tau') \big] \tag{21.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Brackets Denotation</h5>
            <p className="text-lg text-justify">We define <Latex>{String.raw`$[\cdots]' = A_S(\tau)A_S(\tau') - A_S'(\tau)A_S'(\tau') - 2A_S(\tau)A_S'(\tau')$`}</Latex></p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Individual Terms Development</h5>
            <p className="text-lg mb-2 text-justify">First term:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_SA_S - A_S'A_S' = A_m\Delta A' + \Delta A A_m' \tag{21.2} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">Second term:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ -2A_SA_S' = -2A_mA_m' + A_m\Delta A' - \Delta A A_m' + \frac{1}{2}\Delta A\Delta A' \tag{21.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Full Sum</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ [\cdots]' = -2A_m(\tau)A_m(\tau') + 2A_m(\tau)\Delta A(\tau') + \frac{1}{2}\Delta A(\tau)\Delta A(\tau') \tag{21.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Lindblad Approximation (Second Order)</h5>
            <p className="text-lg mb-2 text-justify">In the standard Lindblad master equation approximation:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>The <Latex>{String.raw`$A_mA_m$`}</Latex> term is symmetric in <Latex>{String.raw`$\tau \leftrightarrow \tau'$`}</Latex> and couples to <Latex>{String.raw`$\mathcal{C}_{\text{skew}}$`}</Latex>, which is antisymmetric <Latex>{String.raw`$\rightarrow$`}</Latex> zero integral.</li>
              <li>The <Latex>{String.raw`$\Delta A\Delta A$`}</Latex> term is fourth-order in fluctuations <Latex>{String.raw`$\rightarrow$`}</Latex> neglected in the second-order expansion.</li>
            </ul>
            <p className="text-lg mt-2 mb-2 text-justify">Therefore:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ [\cdots]' \approx 2A_m(\tau)\Delta A(\tau') \tag{21.5} $$`}</Latex>
            </div>
            
            <div className="mt-4 bg-yellow-50 p-4 border-l-4 border-yellow-500 text-lg">
              <strong>Note:</strong> At very high redshifts (<Latex>{String.raw`$z \gtrsim 10^3$`}</Latex>), particularly in regimes such as the inflationary epoch, the condition <Latex>{String.raw`$\tau_c \ll \tau_S$`}</Latex> may fail severely, invalidating the Lindblad approximation. In such cases, the exact Nakajima-Zwanzig master equation (Derivation 24) must be used directly, as it maintains the full integral memory of the non-Markovian kernel.
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Final Result for <Latex>{String.raw`$\mathcal{I}_{\text{Im}}$`}</Latex></h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ i\mathcal{I}_{\text{Im}} \approx -\frac{i}{\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau,\tau') \mathcal{C}_{\text{skew}}(\tau,\tau') A_m(\tau) \Delta A(\tau') \tag{21.6} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Form with Anisotropic Spectral Density</h5>
            <p className="text-lg mb-2 text-justify">Substituting <Latex>{String.raw`$\mathcal{C}_{\text{skew}}$`}</Latex> from (17.5):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{I}_{\text{Im}} = -\frac{1}{\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, A_m(\tau)\Delta A(\tau') $$`}</Latex>
              <Latex>{String.raw`$$ \times \int_0^\infty d\omega \, J(\omega,\theta,\bar{\tau}) [1 + \alpha \cos^2(\theta - \theta_T(z(\bar{\tau})))] \sin[\omega(\tau-\tau')] \tag{21.7} $$`}</Latex>
            </div>

            <p className="text-lg mt-6 text-justify"><strong>Interpretation</strong>: Dissipation couples the mean classical trajectory <Latex>{String.raw`$A_m$`}</Latex> with quantum fluctuations <Latex>{String.raw`$\Delta A$`}</Latex>. The angular modulation <Latex>{String.raw`$[1 + \alpha \cos^2(\theta - \theta_T)]$`}</Latex> introduces directional dependence, and the precession <Latex>{String.raw`$\theta_T(z)$`}</Latex> causes this direction to rotate with cosmic time.</p>
            <p className="text-lg mt-2 text-justify"><strong>Updated Note</strong>: The value <Latex>{String.raw`$\alpha = 1.198 \pm 0.015$`}</Latex> is now calibrated by the Golden Triad, representing a significant anisotropy in the causal coupling.</p>
          </div>

          {/* Section: Canonical Influence Functional */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Canonical Influence Functional in RRT</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Final Form in the Mean and Difference Basis with Combined Effects</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Sum of Real and Imaginary Contributions</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \ln \mathcal{F}[A_S, A_S'] = -\frac{1}{\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau,\tau') \big\{ \frac{1}{2} \mathcal{C}_{\text{sym}}(\tau,\tau') \Delta A(\tau) \Delta A(\tau') + i \mathcal{C}_{\text{skew}}(\tau,\tau') A_m(\tau) \Delta A(\tau') \big\} \tag{22.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Symmetry of the Double Integral</h5>
            <p className="text-lg mb-2 text-justify">We can symmetrize the imaginary term using the fact that <Latex>{String.raw`$\mathcal{C}_{\text{skew}}(\tau,\tau')$`}</Latex> is antisymmetric:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \int d\tau d\tau' \, \mathcal{C}_{\text{skew}}(\tau,\tau') A_m(\tau) \Delta A(\tau') = \frac{1}{2} \int d\tau d\tau' \, \mathcal{C}_{\text{skew}}(\tau,\tau') [A_m(\tau) \Delta A(\tau') - A_m(\tau') \Delta A(\tau)] \tag{22.2} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Final Symmetrized Form</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \ln \mathcal{F}[A_S, A_S'] = -\frac{1}{\hbar^2} \int_{t_0}^{t} d\tau \int_{t_0}^{t} d\tau' \, f(\tau,\tau') \big\{ \frac{1}{2} \mathcal{C}_{\text{sym}}(\tau,\tau') \Delta A(\tau) \Delta A(\tau') $$`}</Latex>
              <Latex>{String.raw`$$ + \frac{i}{2} \mathcal{C}_{\text{skew}}(\tau,\tau') [A_m(\tau) \Delta A(\tau') - A_m(\tau') \Delta A(\tau)] \big\} \tag{22.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Full Physical Interpretation</h5>
            <ul className="list-disc pl-8 space-y-4 text-lg">
              <li><strong>First term</strong>: Pure decoherence - depends only on quantum fluctuations <Latex>{String.raw`$\Delta A$`}</Latex>. It suppresses off-diagonal coherences in the density matrix. The factor <Latex>{String.raw`$f(\tau,\tau')$`}</Latex> causes the decoherence rate to increase with redshift.</li>
              <li><strong>Second term</strong>: Dissipation - couples the classical trajectory <Latex>{String.raw`$A_m$`}</Latex> with fluctuations <Latex>{String.raw`$\Delta A$`}</Latex>. It causes relaxation toward equilibrium and the Lamb shift (energy renormalization). The angular dependence and precession are contained within <Latex>{String.raw`$\mathcal{C}_{\text{skew}}$`}</Latex>.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Markovian Limit with Gradient</h5>
            <p className="text-lg mb-2 text-justify">In the traditional Markovian limit, <Latex>{String.raw`$\mathcal{C}_{\text{sym}}(\tau,\tau') \rightarrow \gamma \delta(\tau-\tau')$`}</Latex> and <Latex>{String.raw`$\mathcal{C}_{\text{skew}}(\tau,\tau') \rightarrow \lambda \delta'(\tau-\tau')$`}</Latex>. In RRT with a gradient, these become:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{sym}}(\tau,\tau') \rightarrow \gamma(z(\tau)) \delta(\tau-\tau') \tag{22.4} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau,\tau') \rightarrow \lambda(z(\tau)) \delta'(\tau-\tau') \tag{22.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\gamma(z) = \gamma_0 (1+z)^{2\gamma}$`}</Latex> and <Latex>{String.raw`$\lambda(z) = \lambda_0 (1+z)^{2\gamma}$`}</Latex> grow with redshift.</p>

            <p className="text-lg mt-6 text-justify"><strong>Robustness Note (Jackknife Test)</strong>: The calibration of coefficients via Jackknife resampling in SDSS DR16Q (after <Latex>{String.raw`$3\sigma$`}</Latex> clipping, <Latex>{String.raw`$N=216,076$`}</Latex>) confirmed the signal stability with a directional standard deviation of only <Latex>{String.raw`$1.69^\circ$`}</Latex>. The consolidated value <Latex>{String.raw`$D_0 = -0.0189 \pm 0.0005$`}</Latex> establishes the intensity of the causal gradient with statistical significance that shields the theory against local fluctuations, galactic dust, or selection bias.</p>
          </div>

          {/* Section: Keldysh Master Equation */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Keldysh Master Equation with Cosmic Time</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Path Integral Formulation for the Density Matrix in RRT</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Path Integral Representation of the Density Matrix</h5>
            <p className="text-lg mb-2 text-justify">The reduced density matrix of the system evolves as:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_S(t) = \int \mathscr{D}A_S \mathscr{D}A_S' \, e^{\frac{i}{\hbar}(S_S[A_S] - S_S[A_S'])} \mathcal{F}[A_S, A_S'] \rho_S(t_0) \tag{23.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$S_S$`}</Latex> is the action of the isolated system and <Latex>{String.raw`$\mathcal{F}$`}</Latex> is the derived influence functional.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Change to <Latex>{String.raw`$A_m$`}</Latex> and <Latex>{String.raw`$\Delta A$`}</Latex> Variables</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_S(t) = \int \mathscr{D}A_m \mathscr{D}\Delta A \, e^{\frac{i}{\hbar}\int d\tau \, \Delta A(\tau) \frac{\delta S_S}{\delta A_m(\tau)} + \cdots} \mathcal{F}[A_m, \Delta A] \rho_S(t_0) \tag{23.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where we expand <Latex>{String.raw`$S_S[A_S] - S_S[A_S']$`}</Latex> to first order in <Latex>{String.raw`$\Delta A$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Temporal Variation of the Density Matrix</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = \lim_{\Delta t \to 0} \frac{\rho_S(t + \Delta t) - \rho_S(t)}{\Delta t} \tag{23.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Expansion for Small <Latex>{String.raw`$\Delta t$`}</Latex></h5>
            <p className="text-lg mb-2 text-justify">For small <Latex>{String.raw`$\Delta t$`}</Latex> (but still much larger than the reservoir correlation time <Latex>{String.raw`$\tau_c$`}</Latex>), we expand the influence functional:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{F}[A_S, A_S'] \approx 1 - \frac{1}{\hbar^2} \int_t^{t+\Delta t} d\tau \int_t^{t+\Delta t} d\tau' \, f(\tau,\tau') [\cdots] \tag{23.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Dominant Term</h5>
            <p className="text-lg mb-2 text-justify">The dominant term arises from the double integral in the interval <Latex>{String.raw`$[t, t+\Delta t]$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_S(t+\Delta t) \approx \rho_S(t) - \frac{1}{\hbar^2} \int_t^{t+\Delta t} d\tau \int_t^{t+\Delta t} d\tau' \, f(\tau,\tau') [\cdots] \rho_S(t) \tag{23.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Differential Equation</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -\frac{1}{\hbar^2} \lim_{\Delta t \to 0} \frac{1}{\Delta t} \int_t^{t+\Delta t} d\tau \int_t^{t+\Delta t} d\tau' \, f(\tau,\tau') [\cdots] \rho_S(t) \tag{23.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$[\cdots]$`}</Latex> represents the appropriate combination of operators according to (22.3).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Operational Form</h5>
            <p className="text-lg mb-2 text-justify">In terms of system operators:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -\frac{i}{\hbar}[H_S, \rho_S] + \mathcal{L}_{\text{diss}}(z(t))[\rho_S] \tag{23.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{L}_{\text{diss}}(z)$`}</Latex> is the dissipative superoperator that depends on redshift (via <Latex>{String.raw`$f(\tau,\tau')$`}</Latex>) and contains both decoherence and dissipation.</p>
            <p className="text-lg mt-4 text-justify"><strong>Updated Note</strong>: The <Latex>{String.raw`$z(t)$`}</Latex> dependence is now empirically calibrated by the Golden Triad, yielding <Latex>{String.raw`$\mathcal{L}_{\text{diss}}(z) = \mathcal{L}_{\text{diss}}^{(0)} (1+z)^{2.00 \pm 0.02}$`}</Latex>.</p>
          </div>

          {/* Section: Markov Approximation */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Markov Approximation with Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Short Memory Limit with Slow Evolution</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Markovian Hypothesis in RRT</h5>
            <p className="text-lg mb-2 text-justify">We assume that reservoir correlations decay rapidly compared to the system's timescale, but allow for slow evolution of parameters due to cosmic expansion:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}(\tau, \tau') \approx \Gamma(z(\bar{\tau})) \delta(\tau-\tau') + i\Lambda(z(\bar{\tau})) \delta'(\tau-\tau') \tag{24.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\bar{\tau} = (\tau+\tau')/2$`}</Latex>, and <Latex>{String.raw`$\Gamma(z)$`}</Latex>, <Latex>{String.raw`$\Lambda(z)$`}</Latex> evolve with <Latex>{String.raw`$z$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Moment Expansion with Evolution</h5>
            <p className="text-lg mb-2 text-justify">We can expand the correlation functions:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{sym}}(\tau,\tau') = \gamma_0(z(\bar{\tau})) \delta(\tau-\tau') + \gamma_1(z(\bar{\tau})) \delta'(\tau-\tau') + \cdots \tag{24.2} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau,\tau') = \lambda_0(z(\bar{\tau})) \delta(\tau-\tau') + \lambda_1(z(\bar{\tau})) \delta'(\tau-\tau') + \cdots \tag{24.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Short Memory Approximation</h5>
            <p className="text-lg mb-2 text-justify">We keep only the dominant terms, but now with <Latex>{String.raw`$z$`}</Latex>-dependence:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{C}_{\text{sym}}(\tau,\tau') \approx \gamma(z(\bar{\tau})) \delta(\tau-\tau') \tag{24.4} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \mathcal{C}_{\text{skew}}(\tau,\tau') \approx \lambda(z(\bar{\tau})) \delta'(\tau-\tau') \tag{24.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Physical Justification</h5>
            <p className="text-lg mb-2 text-justify">This approximation is valid when:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \tau_c \ll \tau_S, \quad \text{and} \quad \left|\frac{1}{\gamma}\frac{d\gamma}{dt}\right| \tau_c \ll 1 \tag{24.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\tau_c$`}</Latex> is the reservoir correlation time, <Latex>{String.raw`$\tau_S$`}</Latex> is the system's characteristic time, and the second condition ensures that the evolution of <Latex>{String.raw`$\gamma(z(t))$`}</Latex> is slow compared to <Latex>{String.raw`$\tau_c$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Effective Coefficients with Gradient</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma(z) = \gamma_0 (1+z)^{2\gamma} \quad \text{with } \gamma_0 = \int_{-\infty}^{\infty} d\Delta\tau \, C_0(\Delta\tau) \tag{24.7} $$`}</Latex>
            </div>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \lambda(z) = \lambda_0 (1+z)^{2\gamma} \quad \text{with } \lambda_0 = \int_{-\infty}^{\infty} d\Delta\tau \, \Delta\tau \, C_0^{\text{skew}}(\Delta\tau) \tag{24.8} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Validity for the Real Universe</h5>
            <p className="text-lg mb-2 text-justify">For the causal reservoir at cosmological scales:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><Latex>{String.raw`$\tau_c \sim \omega_c^{-1} \sim H_0^{-1} \sim 10^{17}$`}</Latex> s (Hubble time)</li>
              <li><Latex>{String.raw`$\tau_S$`}</Latex> for typical quantum systems: <Latex>{String.raw`$10^{-15}$`}</Latex> to <Latex>{String.raw`$10^3$`}</Latex> s</li>
              <li><Latex>{String.raw`$\left|\frac{1}{\gamma}\frac{d\gamma}{dt}\right| \sim H_0 \sim 10^{-18}$`}</Latex> s<Latex>{String.raw`$^{-1}$`}</Latex></li>
            </ul>
            <p className="text-lg mt-4 text-justify">The condition <Latex>{String.raw`$\tau_c \ll \tau_S$`}</Latex> <strong>is not satisfied</strong> for systems with <Latex>{String.raw`$\tau_S < H_0^{-1}$`}</Latex>! This means that the standard Markovian approximation may not be valid for coupling with the causal reservoir at cosmological scales. A non-Markovian treatment is required.</p>
            <p className="text-lg mt-4 text-justify"><strong>Updated Note</strong>: For astrophysical systems (<Latex>{String.raw`$\tau_S \sim 10^{6}-10^{17}$`}</Latex> s) the Markovian approximation is marginally valid. For laboratory systems (<Latex>{String.raw`$\tau_S < 10^3$`}</Latex> s) non-Markovian treatment is essential.</p>
          </div>

          {/* Section: Non-Markovian Dissipative Superoperator */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Non-Markovian Dissipative Superoperator</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Exact Form via Nakajima-Zwanzig Projection in RRT</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Nakajima-Zwanzig Projector</h5>
            <p className="text-lg mb-2 text-justify">We define the projector that traces over the reservoir:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{P} \rho = \rho_T \otimes \text{Tr}_T[\rho] \tag{25.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\rho_T$`}</Latex> is the state of the <Latex>{String.raw`$T_\mu$`}</Latex> field (thermal with temperature <Latex>{String.raw`$T_{\text{causal}}$`}</Latex>), and <Latex>{String.raw`$\mathcal{Q} = 1 - \mathcal{P}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Exact Projected Equation of Motion</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d}{dt} \mathcal{P}\rho(t) = -\frac{i}{\hbar} \mathcal{P}L \mathcal{P}\rho(t) - \frac{1}{\hbar^2} \int_0^t ds \, \mathcal{P}L e^{-i\mathcal{Q}L s/\hbar} \mathcal{Q}L \mathcal{P}\rho(t-s) \tag{25.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$L = [H_{\text{total}}, \cdot]$`}</Latex> is the total Liouvillian, with <Latex>{String.raw`$H_{\text{total}} = H_S + H_T + H_{\text{int}}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Born Approximation (Weak Coupling)</h5>
            <p className="text-lg mb-2 text-justify">We assume <Latex>{String.raw`$\mathcal{P}\rho(t-s) \approx \mathcal{P}\rho(t)$`}</Latex> (the reservoir is not significantly perturbed):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d}{dt} \mathcal{P}\rho(t) \approx -\frac{i}{\hbar} \mathcal{P}L \mathcal{P}\rho(t) - \frac{1}{\hbar^2} \int_0^t ds \, \mathcal{P}L e^{-i\mathcal{Q}L_0 s/\hbar} \mathcal{Q}L \mathcal{P}\rho(t) \tag{25.3} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$L_0 = [H_S + H_T, \cdot]$`}</Latex> is the free Liouvillian.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Expression for the Reduced Density Matrix</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$\rho_S(t) = \text{Tr}_T[\rho(t)]$`}</Latex>, we obtain:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -\frac{i}{\hbar}[H_S, \rho_S] - \frac{1}{\hbar^2} \int_0^t d\tau \, \text{Tr}_T \left[ H_{\text{int}}, [H_{\text{int}}(-\tau), \rho_S(t) \otimes \rho_T] \right] \tag{25.4} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$H_{\text{int}}(-\tau) = e^{-i(H_S+H_T)\tau/\hbar} H_{\text{int}} e^{i(H_S+H_T)\tau/\hbar}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Commutator Development</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \left[ H_{\text{int}}, [H_{\text{int}}(-\tau), \rho_S \otimes \rho_T] \right] = H_{\text{int}} H_{\text{int}}(-\tau) \rho_S \rho_T - H_{\text{int}} \rho_S \rho_T H_{\text{int}}(-\tau) $$`}</Latex>
              <Latex>{String.raw`$$ - H_{\text{int}}(-\tau) \rho_S \rho_T H_{\text{int}} + \rho_S \rho_T H_{\text{int}}(-\tau) H_{\text{int}} \tag{25.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Form with Explicit Time Dependence</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$H_{\text{int}} = A_S \otimes B_T$`}</Latex> (where <Latex>{String.raw`$B_T$`}</Latex> is the <Latex>{String.raw`$T_\mu$`}</Latex> field operator):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -\frac{i}{\hbar}[H_S, \rho_S] - \frac{1}{\hbar^2} \int_0^t d\tau \, \{ C(\tau) [A_S, A_S(-\tau)\rho_S] - C^*(-\tau) [A_S, \rho_S A_S(-\tau)] + \text{h.c.} \} \tag{25.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$C(\tau) = \langle B_T B_T(\tau) \rangle_T$`}</Latex> is the reservoir's correlation function, and <Latex>{String.raw`$A_S(\tau) = e^{iH_S\tau/\hbar} A_S e^{-iH_S\tau/\hbar}$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Inclusion of Gradient and Precession</h5>
            <p className="text-lg mb-2 text-justify">In RRT, <Latex>{String.raw`$C(\tau)$`}</Latex> is non-stationary:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ C(\tau; t) = f(t, t-\tau) C_0(\tau) \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t-\tau/2))) \right] \tag{25.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$f(t, t-\tau) = (1+z(t))^\gamma (1+z(t-\tau))^\gamma$`}</Latex>, and the dependence on <Latex>{String.raw`$t$`}</Latex> enters explicitly.</p>
            <p className="text-lg mt-4 text-justify"><strong>Updated Note</strong>: The parameters <Latex>{String.raw`$\alpha = 1.198$`}</Latex>, and the precessional mechanism <Latex>{String.raw`$\omega_p(z)$`}</Latex> are calibrated by the Golden Triad, ensuring that the non-Markovian equation correctly incorporates the observed cosmic evolution.</p>
          </div>

          {/* Section: Lindblad Form */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Lindblad Form with Time-Dependent Coefficients</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Representation of Jump Operators with Cosmic Evolution</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Master Equation in Non-Stationary Lindblad Form</h5>
            <p className="text-lg mb-2 text-justify">Even outside the strict Markovian regime, we can write a Lindblad form with time-dependent coefficients:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -\frac{i}{\hbar}[H_S + H_{LS}(t), \rho_S] + \sum_{\omega} \sum_{\alpha\beta} \gamma_{\alpha\beta}(\omega, t) \left[ A_\beta(\omega) \rho_S A_\alpha^\dagger(\omega) - \frac{1}{2} \{ A_\alpha^\dagger(\omega) A_\beta(\omega), \rho_S \} \right] \tag{25.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Spectral Operators</h5>
            <p className="text-lg mb-2 text-justify">The operators <Latex>{String.raw`$A_\alpha(\omega)$`}</Latex> are defined in the energy basis of <Latex>{String.raw`$H_S$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ A_\alpha(\omega) = \sum_{\epsilon' - \epsilon = \hbar\omega} \Pi(\epsilon) A_\alpha \Pi(\epsilon') \tag{25.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\Pi(\epsilon)$`}</Latex> is the projector onto the energy eigenstate <Latex>{String.raw`$\epsilon$`}</Latex>, and <Latex>{String.raw`$A_\alpha$`}</Latex> are the coupling operators (in our case, typically <Latex>{String.raw`$A_S$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Time-Dependent Decay Coefficients</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma_{\alpha\beta}(\omega, t) = \int_{-\infty}^{\infty} d\tau \, e^{i\omega\tau} C_{\alpha\beta}(\tau; t) \tag{25.3} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$C_{\alpha\beta}(\tau; t)$`}</Latex> are the reservoir's correlation functions, now with explicit <Latex>{String.raw`$t$`}</Latex>-dependence due to the gradient.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Time-Dependent Lamb Shift Hamiltonian</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{LS}(t) = \sum_{\omega} \sum_{\alpha\beta} S_{\alpha\beta}(\omega, t) A_\alpha^\dagger(\omega) A_\beta(\omega) \tag{25.4} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">with:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ S_{\alpha\beta}(\omega, t) = \frac{1}{2i} \left[ \Gamma_{\alpha\beta}(\omega, t) - \Gamma_{\beta\alpha}^*(\omega, t) \right] \tag{25.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\Gamma_{\alpha\beta}(\omega, t) = \frac{1}{\hbar^2} \int_0^\infty d\tau \, e^{i\omega\tau} C_{\alpha\beta}(\tau; t)$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Specific Form for RRT</h5>
            <p className="text-lg mb-2 text-justify">For <Latex>{String.raw`$H_{\text{int}} = A_S \otimes B_T$`}</Latex> coupling:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma(\omega, t) = \frac{1}{\hbar^2} \int_{-\infty}^{\infty} d\tau \, e^{i\omega\tau} f(t, t-\tau) C_0(\tau) \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t-\tau/2))) \right] \tag{25.6} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \gamma(\omega, t) = \gamma_0(\omega) (1+z(t))^{2\gamma} \left[ 1 + \alpha \cos^2(\theta - \theta_T(z(t))) \right] \times F(\omega, t) \tag{25.7} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$F(\omega, t)$`}</Latex> is a form factor capturing deviations from perfect Markovianity.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Completeness Condition and Trace Preservation</h5>
            <p className="text-lg mb-2 text-justify">The Lindblad form automatically preserves:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \text{Tr}\left[\frac{d\rho_S}{dt}\right] = 0 \tag{25.8} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \rho_S(t) \succeq 0 \quad \forall t \quad \text{if} \quad \rho_S(0) \succeq 0 \tag{25.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">even with time-dependent coefficients, provided that the matrix <Latex>{String.raw`$\gamma_{\alpha\beta}(\omega, t)$`}</Latex> is positive semi-definite for all <Latex>{String.raw`$t$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Explicit Matrix Representation</h5>
            <p className="text-lg mb-2 text-justify">In the energy basis <Latex>{String.raw`$\{|n\rangle\}$`}</Latex> of <Latex>{String.raw`$H_S$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\rho_{nm}}{dt} = -i\omega_{nm}\rho_{nm} + \sum_{k,l} \mathcal{L}_{nm,kl}(t) \rho_{kl} \tag{25.10} $$`}</Latex>
            </div>
            <p className="text-lg mb-2 text-justify">where the time-dependent dissipative superoperator is:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \mathcal{L}_{nm,kl}(t) = \sum_{\omega} \gamma(\omega, t) \big[ A(\omega)_{nk} A^\dagger(\omega)_{lm} - \frac{1}{2} \delta_{ml} \sum_p A^\dagger(\omega)_{np} A(\omega)_{pk} $$`}</Latex>
              <Latex>{String.raw`$$ - \frac{1}{2} \delta_{nk} \sum_p A^\dagger(\omega)_{lp} A(\omega)_{pm} \big] \tag{25.11} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Symmetries and Conservation Laws</h5>
            <p className="text-lg mb-2 text-justify">If the system possesses a conserved quantity <Latex>{String.raw`$Q$`}</Latex> with <Latex>{String.raw`$[H_S, Q] = 0$`}</Latex>, then:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \frac{d\langle Q \rangle}{dt} = \text{Tr}\left[Q \frac{d\rho_S}{dt}\right] = 0 \tag{25.12} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">provided that <Latex>{String.raw`$[A_\alpha(\omega), Q] = 0$`}</Latex> for all <Latex>{String.raw`$\alpha, \omega$`}</Latex>, or weaker conditions are satisfied.</p>
          </div>

          {/* Section: Dissipation Coefficients */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of Dissipation Coefficients with Gradient</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Explicit Calculation of <Latex>{String.raw`$\gamma_{nm}(t)$`}</Latex> and <Latex>{String.raw`$S_{nm}(t)$`}</Latex> in RRT</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: Definition of the Time-Dependent Complex Integral</h5>
            <p className="text-lg mb-2 text-justify">We start from the general expression:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \Gamma_{nm}(t) = \frac{1}{\hbar^2} \int_0^\infty d\tau \, e^{i\omega_{nm}\tau} C(\tau; t) \tag{26.1} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$C(\tau; t)$`}</Latex> given by (24.7).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Decomposition into Real and Imaginary Parts</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma_{nm}(t) = 2\text{Re}[\Gamma_{nm}(t)] = \frac{2}{\hbar^2} \int_0^\infty d\tau \, \cos(\omega_{nm}\tau) C_{\text{sym}}(\tau; t) \tag{26.2} $$`}</Latex><br/>
              <Latex>{String.raw`$$ S_{nm}(t) = \text{Im}[\Gamma_{nm}(t)] = \frac{1}{\hbar^2} \int_0^\infty d\tau \, \sin(\omega_{nm}\tau) C_{\text{skew}}(\tau; t) \tag{26.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Substitution of RRT Correlation Functions</h5>
            <p className="text-lg mb-2 text-justify">Using (15.5) and (16.5):</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma_{nm}(t) = \frac{2}{\hbar^2} \int_0^\infty d\tau \, \cos(\omega_{nm}\tau) \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(t, t-\tau) (2n_k^{(\lambda)}+1) \cos[\omega_k \tau] \tag{26.4} $$`}</Latex><br/>
              <Latex>{String.raw`$$ S_{nm}(t) = -\frac{1}{\hbar^2} \int_0^\infty d\tau \, \sin(\omega_{nm}\tau) \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 f_k(t, t-\tau) [1+\alpha\cos^2(\theta_k-\theta_T)] \sin[\omega_k \tau] \tag{26.5} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Slow Evolution Approximation</h5>
            <p className="text-lg mb-2 text-justify">If the evolution of <Latex>{String.raw`$f_k(t, t-\tau)$`}</Latex> is slow compared to <Latex>{String.raw`$1/\omega_{nm}$`}</Latex>, we can approximate <Latex>{String.raw`$f_k(t, t-\tau) \approx f_k(t, t) = (1+z(t))^{2\gamma_k}$`}</Latex>. Thus:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \begin{aligned} \gamma_{nm}(t) &\approx (1+z(t))^{2\gamma} \cdot \frac{2}{\hbar^2} \int_0^\infty d\tau \, \cos(\omega_{nm}\tau) \sum_{k,\lambda} |g_{k0}^{(\lambda)}|^2 (2n_k^{(\lambda)}+1) \cos[\omega_k \tau] \tag{26.6} \\ &= (1+z(t))^{2\gamma} \cdot \gamma_{nm}^{(0)} \end{aligned} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\gamma_{nm}^{(0)}$`}</Latex> are the coefficients at <Latex>{String.raw`$t=0$`}</Latex> (<Latex>{String.raw`$z=0$`}</Latex>).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Use of Integral Identities</h5>
            <p className="text-lg mb-2 text-justify">We apply the relations:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \int_0^\infty d\tau \, \cos(\omega\tau)\cos(\omega'\tau) = \frac{\pi}{2} [\delta(\omega-\omega') + \delta(\omega+\omega')] \tag{26.7} $$`}</Latex><br/>
              <Latex>{String.raw`$$ \int_0^\infty d\tau \, \sin(\omega\tau)\sin(\omega'\tau) = \frac{\pi}{2} [\delta(\omega-\omega') - \delta(\omega+\omega')] \tag{26.8} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Final Results for <Latex>{String.raw`$\gamma_{nm}(t)$`}</Latex></h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma_{nm}(t) = (1+z(t))^{2\gamma} \cdot \frac{\pi}{\hbar^2} J(|\omega_{nm}|, \theta, t) [2n(|\omega_{nm}|, T_{\text{causal}}) + 1 + \text{sgn}(\omega_{nm})] \tag{26.9} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$J(\omega, \theta, t)$`}</Latex> is given by (17.7), and <Latex>{String.raw`$\text{sgn}(\omega_{nm}) = +1$`}</Latex> for <Latex>{String.raw`$\omega_{nm} > 0$`}</Latex>, and <Latex>{String.raw`$-1$`}</Latex> for <Latex>{String.raw`$\omega_{nm} < 0$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Final Results for <Latex>{String.raw`$S_{nm}(t)$`}</Latex> (Lamb shift)</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ S_{nm}(t) = (1+z(t))^{2\gamma} \cdot \frac{1}{\hbar^2} \mathcal{P} \int_0^\infty d\omega \, J(\omega, \theta, t) \left[ \frac{2n(\omega, T_{\text{causal}})+1}{\omega_{nm}-\omega} - \frac{2n(\omega, T_{\text{causal}})+1}{\omega_{nm}+\omega} \right] \tag{26.10} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{P}$`}</Latex> denotes the Cauchy principal value.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Important Limiting Cases</h5>
            <ul className="list-disc pl-8 space-y-4 text-lg">
              <li><strong>Zero temperature</strong> (<Latex>{String.raw`$T_{\text{causal}} \to 0, n(\omega) \to 0$`}</Latex>):
                <div className="bg-gray-50 p-4 rounded-md my-2 overflow-x-auto text-center text-lg border shadow-inner">
                  <Latex>{String.raw`$$ \gamma_{nm}(t) = (1+z(t))^{2\gamma} \cdot \frac{\pi}{\hbar^2} J(|\omega_{nm}|, \theta, t) [1 + \text{sgn}(\omega_{nm})] \tag{26.11} $$`}</Latex><br/>
                  <Latex>{String.raw`$$ S_{nm}(t) = (1+z(t))^{2\gamma} \cdot \frac{1}{\hbar^2} \mathcal{P} \int_0^\infty d\omega \, J(\omega, \theta, t) \left[ \frac{1}{\omega_{nm}-\omega} - \frac{1}{\omega_{nm}+\omega} \right] \tag{26.12} $$`}</Latex>
                </div>
              </li>
              <li><strong>High temperatures</strong> (<Latex>{String.raw`$k_B T_{\text{causal}} \gg \hbar\omega_{nm}$`}</Latex>):
                <div className="bg-gray-50 p-4 rounded-md my-2 text-center text-lg border shadow-inner">
                  <Latex>{String.raw`$$ \gamma_{nm}(t) \approx (1+z(t))^{2\gamma} \cdot \frac{2\pi k_B T_{\text{causal}}}{\hbar^2 \omega_{nm}} J(|\omega_{nm}|, \theta, t) \tag{26.13} $$`}</Latex>
                </div>
              </li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 9: Generalized Kramers-Kronig Relations</h5>
            <p className="text-lg mb-2 text-justify">The dissipative and reactive coefficients satisfy:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ S_{nm}(t) = \frac{1}{\pi} \mathcal{P} \int_{-\infty}^\infty d\omega' \, \frac{\gamma_{nm}(\omega', t)}{\omega_{nm} - \omega'} \tag{26.14} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">even with time dependence, provided the evolution is slow compared to the relevant frequency scales.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 10: Physical Interpretation</h5>
            <p className="text-lg text-justify"><Latex>{String.raw`$\gamma_{nm}(t)$`}</Latex> represents transition rates between states <Latex>{String.raw`$|n\rangle$`}</Latex> and <Latex>{String.raw`$|m\rangle$`}</Latex> that <strong>grow with redshift</strong> as <Latex>{String.raw`$(1+z)^{2\gamma}$`}</Latex>. <Latex>{String.raw`$S_{nm}(t)$`}</Latex> describes energy shifts (Lamb shift) that also increase with <Latex>{String.raw`$z$`}</Latex>. The angular dependence in <Latex>{String.raw`$J(\omega,\theta,t)$`}</Latex> introduces anisotropy into the rates, and the precession <Latex>{String.raw`$\theta_T(z(t))$`}</Latex> causes this anisotropy to rotate with cosmic time.</p>
            <p className="text-lg mt-4 text-justify"><strong>Updated Note</strong>: Calibration with the Golden Triad yields <Latex>{String.raw`$\gamma = 1.00 \pm 0.02$`}</Latex>, confirming the <Latex>{String.raw`$(1+z)^2$`}</Latex> law with high precision.</p>
          </div>

          {/* Section: Final RRT Master Equation */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Derivation of the Final RRT Causal Master Equation</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Explicit Form for Referential Relativity Theory</h4>
            
            <h5 className="font-bold text-lg mt-4 text-gray-800">Step 1: System Operators in RRT</h5>
            <p className="text-lg text-justify">For RRT, the interaction operator is typically <Latex>{String.raw`$A_S$`}</Latex> (matter density, momentum, spin, etc.) with matrix elements <Latex>{String.raw`$A_{nm} = \langle n|A_S|m\rangle$`}</Latex> in the energy basis of <Latex>{String.raw`$H_S$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 2: Specific Transition Rates with Gradient</h5>
            <p className="text-lg mb-2 text-justify">From (26.9), with <Latex>{String.raw`$\gamma=1$`}</Latex> to reproduce <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \gamma_{nm}(t) = (1+z(t))^{2} \cdot \frac{\pi}{\hbar^2} J(|\omega_{nm}|, \theta, t) [2n(|\omega_{nm}|, T_{\text{causal}}) + 1 + \text{sgn}(\omega_{nm})] \tag{27.1} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 3: Causal Lamb Shift with Evolution</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{LS}(t) = \sum_{n,m} \hbar S_{nm}(t) A_{nm} A_{mn} |n\rangle\langle n| \tag{27.2} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">with <Latex>{String.raw`$S_{nm}(t)$`}</Latex> given by (26.10).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 4: Final Causal Lindblad Master Equation</h5>
            <div className="bg-orange-50 p-6 rounded-md my-4 overflow-x-auto text-center text-xl font-bold border-l-4 border-orange-500 text-orange-900 shadow-sm">
              <Latex>{String.raw`$$ \frac{d\rho_S}{dt} = -i[H_S + H_{LS}(t), \rho_S] $$`}</Latex>
              <Latex>{String.raw`$$ + \sum_{n,m} \gamma_{nm}(t) \big( A_{nm} \rho_S A_{mn} - \frac{1}{2} \{ A_{mn} A_{nm}, \rho_S \} \big) \tag{27.3} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 5: Total Effective Hamiltonian</h5>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ H_{\text{eff}}(t) = H_S + H_{LS}(t) \tag{27.4} $$`}</Latex>
            </div>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 6: Conservation Properties</h5>
            <p className="text-lg mb-2 text-justify">The equation preserves:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>Trace</strong>: <Latex>{String.raw`$\text{Tr}[\rho_S(t)] = 1$`}</Latex> for all <Latex>{String.raw`$t$`}</Latex>.</li>
              <li><strong>Positivity</strong>: <Latex>{String.raw`$\rho_S(t) \succeq 0$`}</Latex> if <Latex>{String.raw`$\rho_S(0) \succeq 0$`}</Latex>.</li>
              <li><strong>Mean Energy</strong>: <Latex>{String.raw`$\frac{d}{dt}\langle H_S \rangle = \text{Tr}[\mathcal{L}(t)(\rho_S) H_S] = \sum_{n,m} \gamma_{nm}(t) \hbar\omega_{nm} |A_{nm}|^2 \rho_{nn}$`}</Latex>.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 7: Formal Solution</h5>
            <p className="text-lg mb-2 text-justify">The solution can be written as:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_S(t) = \mathcal{T} \exp\left[ \int_{t_0}^t d\tau \, \mathcal{L}(\tau) \right] \rho_S(t_0) \tag{27.5} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{T}$`}</Latex> is the time-ordering operator (required because <Latex>{String.raw`$\mathcal{L}(t)$`}</Latex> does not commute with itself at different times), and <Latex>{String.raw`$\mathcal{L}(t)$`}</Latex> is the time-dependent generator given by the right-hand side of (27.3).</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 8: Adiabatic Evolution Approximation</h5>
            <p className="text-lg mb-2 text-justify">If the evolution of <Latex>{String.raw`$\gamma_{nm}(t)$`}</Latex> and <Latex>{String.raw`$S_{nm}(t)$`}</Latex> is slow compared to the decoherence rates <Latex>{String.raw`$1/\gamma_{nm}$`}</Latex>, we can approximate:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \rho_S(t) \approx \exp\left[ \mathcal{L}(t) (t-t_0) \right] \rho_S(t_0) \tag{27.6} $$`}</Latex>
            </div>
            <p className="text-lg text-justify">where <Latex>{String.raw`$\mathcal{L}(t)$`}</Latex> is evaluated at the current time <Latex>{String.raw`$t$`}</Latex>.</p>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 9: Connection to Cosmological Observations</h5>
            <p className="text-lg mb-2 text-justify">The parameters in the master equation are linked to observables:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><Latex>{String.raw`$(1+z(t))^2$`}</Latex> comes from the gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex>.</li>
              <li><Latex>{String.raw`$J(\omega,\theta,t)$`}</Latex> contains <Latex>{String.raw`$\alpha=1.198$`}</Latex> and direction <Latex>{String.raw`$\theta_0=(125.5^\circ,-15.0^\circ)$`}</Latex>.</li>
              <li><Latex>{String.raw`$\theta_T(z) = \theta_0 + \omega_p z$`}</Latex> (Cortez Rotation).</li>
              <li><Latex>{String.raw`$T_{\text{causal}}$`}</Latex> is the effective temperature of the <Latex>{String.raw`$T_\mu$`}</Latex> field.</li>
            </ul>

            <h5 className="font-bold text-lg mt-6 text-gray-800">Step 10: Limits of Applicability</h5>
            <p className="text-lg mb-2 text-justify">Equation (27.3) is valid for:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li>Systems with <Latex>{String.raw`$\tau_S \gg \tau_{\text{micro}}$`}</Latex> (microscopic scale of the system).</li>
              <li>Weak coupling: <Latex>{String.raw`$|\gamma_{nm}(t)| \ll |\omega_{nm}|$`}</Latex>.</li>
              <li>Gaussian reservoir (<Latex>{String.raw`$T_\mu$`}</Latex> field in linear approximation).</li>
              <li>Slow evolution of the universe: <Latex>{String.raw`$H_0 \ll \min(|\omega_{nm}|, 1/\tau_S)$`}</Latex>.</li>
            </ul>

            <p className="text-lg mt-8 text-justify font-semibold text-blue-900 border-l-4 border-blue-500 pl-4">
              Transition between articles: This master equation establishes the complete mathematical basis for the causal decoherence and objective wave function collapse mechanism discussed in Article I (phenomenology) and connects with the causal genesis derived in Article III through the specific coupling to the <Latex>{String.raw`$T_\mu$`}</Latex> field with its gradient and precession properties.
            </p>
          </div>

        </section>

        {/* =======================================================
            BLOCK 4: Applications and Physical Consequences
            ======================================================= */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">
            BLOCK 4: Applications and Physical Consequences of RRT
          </h2>

          <ImagePanel src="/imagens/10.png" alt="Physical Consequences" caption="Physical Consequences: From laboratory null results to deep space phase delays." themeColor="var(--theme-color)" />

          <p className="text-lg mb-8 text-justify">
            <strong>Transition to Phenomenology</strong>: With the complete mathematical formalism established, we now apply Referential Relativity Theory to specific physical systems, demonstrating its predictive power and observable consequences. The primary novelties are: (1) decoherence rates that grow with redshift, (2) angular dependence in transitions, (3) cosmic precession of preferred directions.
          </p>

          {/* Section: Consequence of Shielding */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">The Consequence of Shielding for Local Quantum Systems and Matter Stability</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Derivation: Nullity of Laboratory Effects and Matter Stability</h4>
            <p className="text-lg mb-4 text-justify">The direct application of the influence functional derived in Section 22 to quantum systems in terrestrial laboratories reveals the critical importance of the shielding function <Latex>{String.raw`$K(\rho)$`}</Latex>.</p>
            <p className="text-lg mb-2 text-justify">For a typical experiment on Earth (density <Latex>{String.raw`$\rho_{lab} \sim 10^{23} \rho_{crit}$`}</Latex>), the effective coupling factor is exponentially suppressed:</p>
            <div className="bg-gray-50 p-4 rounded-md my-4 overflow-x-auto text-center text-lg border shadow-inner">
              <Latex>{String.raw`$$ \xi_{eff} = \xi_T \cdot K(\rho_{lab}) \approx \xi_T \cdot e^{-10^{23}} \approx 0 $$`}</Latex>
            </div>
            <p className="text-lg text-justify mt-4 mb-4">This mathematical suppression formalizes the fact that <strong>Phase 1 (Saturation)</strong> protects local quantum mechanics from cosmological viscosity. Consequently:</p>
            <ul className="list-disc pl-8 space-y-2 text-lg">
              <li><strong>Zeno Effect and Decoherence:</strong> There is no alteration in qubit decoherence rates or atomic lifetimes in the laboratory.</li>
              <li><strong>Spectroscopy:</strong> No measurable Lamb shift or Lorentz breaking in atomic clocks (confirming ESA data).</li>
              <li><strong>Quantum Fields:</strong> The theory reduces strictly to the Standard Model at sub-galactic scales.</li>
            </ul>
            <p className="text-lg text-justify mt-4">RRT, therefore, predicts that quantum anomalies can only be observed in experiments conducted in <strong>deep vacuum</strong> (far from galaxies), where <Latex>{String.raw`$K(\rho) \to 1$`}</Latex>.</p>
          </div>

          {/* Section: Future Research Perspectives */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Future Research Perspectives in RRT</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Priority Directions for Future Development of Referential Relativity Theory</h4>
            
            <ul className="space-y-6 text-lg text-justify">
              <li>
                <strong>1. Application to Specific Systems:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li><strong>Cosmology</strong>: Effects of causal fields on inflation and large-scale structure formation.</li>
                  <li><strong>Condensed Matter</strong>: Quantum transport in topological materials with gradients.</li>
                  <li><strong>Quantum Optics</strong>: Spontaneous emission in anisotropic cavities with precession.</li>
                </ul>
              </li>
              <li>
                <strong>2. Numerical Implementation:</strong>
                <div className="bg-gray-50 p-4 rounded-md my-2 overflow-x-auto text-center text-lg border shadow-inner">
                  <Latex>{String.raw`$$ \rho_S(t+\Delta t) = \mathcal{T} \exp\left[ \int_t^{t+\Delta t} d\tau \, \mathcal{L}(\tau) \right] \rho_S(t) \tag{44.1} $$`}</Latex>
                </div>
                Development of efficient algorithms for simulating dissipative dynamics with gradients.
              </li>
              <li>
                <strong>3. Crucial Experimental Tests:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Precision measurements of decoherence time <Latex>{String.raw`$\tau_D(t)$`}</Latex> across different orientations and redshifts.</li>
                  <li>Verification of anisotropy in spontaneous emission via high-resolution spectroscopy.</li>
                  <li>Quantum interference measurements across different spatial directions.</li>
                  <li>Tests of Lorentz invariance violation in controlled quantum systems.</li>
                </ul>
              </li>
              <li>
                <strong>4. Theoretical Extensions:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li><strong>Quantum Gravity</strong>: Coupling to quantum fluctuations of geometry.</li>
                  <li><strong>Quantum Field Theory in Curved Spacetime</strong>: Event horizon effects.</li>
                  <li><strong>Non-Equilibrium Many-Body Systems</strong>: Quantum thermalization with gradients.</li>
                  <li><strong>Quantum Information</strong>: Channel capacity in anisotropic dissipative media.</li>
                </ul>
              </li>
              <li>
                <strong>5. Interdisciplinary Connections:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li><strong>Quantum Biology</strong>: Decoherence in biological systems and potential causal roles.</li>
                  <li><strong>Materials Science</strong>: Effects of anisotropic dissipation in quantum materials.</li>
                  <li><strong>Observational Cosmology</strong>: Testing with CMB, LSS, and supernova data.</li>
                  <li><strong>Foundations of Quantum Mechanics</strong>: Interpreting quantum measurement via causal decoherence.</li>
                </ul>
              </li>
              <li>
                <strong>6. Technical Challenges:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Resolution of the horizon problem in quantum cosmology with causal fields.</li>
                  <li>Formulation of the theory in singular spacetimes (black holes).</li>
                  <li>Extension to non-Abelian gauge theories with Lorentz symmetry breaking.</li>
                  <li>Development of renormalization techniques for cosmic open systems.</li>
                </ul>
              </li>
              <li>
                <strong>7. Long-Term Perspectives:</strong>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Full unification with the Standard Model and quantum gravitation.</li>
                  <li>Formulation of the theory in category and topos language.</li>
                  <li>Development of a grounded quantum theory of causality.</li>
                  <li>Application to resolving the problem of time in quantum gravity.</li>
                </ul>
              </li>
              <li>
                <strong>8. Expected Scientific Impact:</strong>
                <div className="bg-gray-50 p-4 rounded-md my-2 overflow-x-auto text-center text-lg border shadow-inner">
                  <Latex>{String.raw`$$ \Delta \mathcal{K} = \frac{\partial \mathcal{L}}{\partial t} + \{\mathcal{L}, H\} + \mathcal{D}(t)[\mathcal{L}] \tag{44.2} $$`}</Latex>
                </div>
                Evolution of scientific knowledge under the dynamics of future RRT research.
              </li>
            </ul>
          </div>

          {/* Section: Conceptual Implications */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Conceptual and Philosophical Implications of RRT</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h4 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Impact on the Foundations of Theoretical Physics</h4>
            <ul className="space-y-4 text-lg text-justify">
              <li><strong>1. Nature of Time:</strong> RRT proposes a radical reinterpretation: time is not a background parameter but a dynamic field <Latex>{String.raw`$T_\mu$`}</Latex> with intrinsic directionality that interacts causally with matter.</li>
              <li><strong>2. Quantum Measurement Problem:</strong> Provides a natural physical mechanism for wave function collapse via coupling to the causal field <Latex>{String.raw`$T_\mu$`}</Latex>, resolving the measurement problem without ad hoc collapses.</li>
              <li><strong>3. Arrows of Time:</strong> Unification of thermodynamic, cosmological, and quantum arrows of time through a single causal coupling.</li>
              <li><strong>4. Realism and Locality:</strong> Reassessment of the concepts of physical reality and local action in the presence of non-local causal fields mediating correlations.</li>
              <li><strong>5. Emergence of the Classical:</strong> Rigorous mechanism for the emergence of classical behavior from quantum dynamics, with a rate <Latex>{String.raw`$\propto (1+z)^2$`}</Latex> explaining why the early universe was more quantum.</li>
              <li><strong>6. Cosmological Principle:</strong> Modification of the standard cosmological principle to include fundamental anisotropies and precession, reconciling observations with fundamental theory.</li>
              <li><strong>7. Math-Physics Relationship:</strong> New insights into the relationship between mathematical structures (geometry, topology) and physical reality through the concept of referential relativity.</li>
            </ul>
          </div>

          {/* Section: Proof of Phase 1 */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-12">Proof of Phase 1: CMS (CERN) Data Analysis</h3>
          <p className="text-lg mb-4 text-justify">To validate the saturation regime (Phase 1), we analyzed public data from the CMS detector (CERN Open Data), searching for scalar resonances ("Chrons") in the invariant mass of dimuon events.</p>
          
          <ImagePanel src="/imagens/grafico39a.png" alt="Isotropy Audit at the Z-Peak" caption="Isotropy Audit at the Z-Peak. Real CMS data analysis shows perfect agreement with the Standard Model. The null residual confirms that at the 91 GeV scale, temporal viscosity is zero (K(ρ) ≈ 0), validating the existence of Phase 1." themeColor="var(--theme-color)" />
          
          <p className="text-lg mb-4 text-justify">The null result does not refute RRT; on the contrary, it calibrates the critical density <Latex>{String.raw`$\rho_{crit}$`}</Latex>, confirming that vacuum viscosity is a low-density emergent phenomenon. This analysis replaces and corrects previous interpretations that suggested high-energy anomalies, reaffirming that RRT fully respects Lorentz symmetry in the Standard Model regime.</p>
          
          <div className="bg-yellow-50 p-6 rounded-md border-l-4 border-yellow-500 text-lg mb-10 text-justify">
            <strong>Note on Effective Density (<Latex>{String.raw`$\rho_{eff}$`}</Latex>):</strong><br/>
            For the calculation of the shielding function <Latex>{String.raw`$K(\rho)$`}</Latex>, density <Latex>{String.raw`$\rho$`}</Latex> must be interpreted as the total effective energy density (<Latex>{String.raw`$T_{00}$`}</Latex>), encompassing not only baryonic rest mass but also the local gravitational field energy density:
            <div className="text-center my-3"><Latex>{String.raw`$$ \rho_{eff} = \rho_{baryon} + \frac{g^2}{8\pi G c^2} $$`}</Latex></div>
            In the Solar System and terrestrial orbits (LAGEOS), the contribution of the solar and terrestrial gravitational fields maintains <Latex>{String.raw`$\rho_{eff} \gg \rho_{crit}$`}</Latex>, ensuring that the regime remains in <strong>Phase 1 (Saturated)</strong>, shielding local experiments against cosmological causal flow.
          </div>

          {/* Section: Final Conclusions */}
          <h3 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-800 pb-2 mt-12">Final Conclusions of Volume II</h3>
          
          <p className="text-lg mb-4 text-justify"><strong>Referential Relativity Theory (RRT)</strong> represents a deep synthesis between Einstein's geometric vision and Bergson's causal conception, mathematically formalized through the temporal vector field <Latex>{String.raw`$T_\mu$`}</Latex> and the scalar field <Latex>{String.raw`$\Phi$`}</Latex>. Throughout this paper, we have derived:</p>
          
          <ul className="space-y-4 text-lg text-justify mb-8">
            <li><strong>1. Complete Lagrangian Formulation</strong> unifying geometry, matter, and temporal fields with empirically calibrated couplings.</li>
            <li><strong>2. Quantum Master Equation</strong> describing the dynamics of open systems coupled to the causal reservoir, incorporating the <Latex>{String.raw`$(1+z)^2$`}</Latex> gradient, the <Latex>{String.raw`$\alpha=1.198$`}</Latex> anisotropy, and cosmic precession.</li>
            <li><strong>3. Rigorous Mathematical Foundation</strong> spanning from covariant action to specific applications in quantum systems, with guaranteed internal consistency.</li>
            <li><strong>4. Quantitative Predictive Power</strong> with testable predictions for current and future experiments, ranging from laboratory tests to cosmological observations.</li>
            <li><strong>5. Unified Resolution of Anomalies</strong> including dark matter/energy, Hubble tension, cosmic anisotropies, and black hole corrections.</li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-md border border-blue-200 text-lg mb-8 text-justify">
            Unlike quintessence or modified dark energy models, RRT does not introduce new ad hoc fields, but reveals the vector nature of temporal succession via renormalization flow. This fundamental distinction allows the theory to satisfy Ockham's Razor by unifying dynamical anomalies under a single principle of referential causality.
          </div>
          
          <p className="text-lg text-justify mb-6">
            RRT establishes that time is more than a geometric coordinate – it is an active physical force. The spectroscopic validation via SDSS DR16Q with a <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> mark, reinforced by the <Latex>{String.raw`$1.69^\circ$`}</Latex> Jackknife stability, suggests that the anisotropy signal can be interpreted as an intrinsic property of the vacuum. The inclusion of the Chern-Simons term identifies the <Latex>{String.raw`$T_\mu$`}</Latex> field as the Goldstone Boson of causality, unifying referential gravity with the Standard Model of particles.
          </p>
          <p className="text-lg text-justify font-medium">
            We invite the scientific community to test these predictions through the Critical Field Tests (CFTs) program outlined in Article I, and to contribute to the development of this theory that promises to transform our fundamental understanding of time, causality, and physical reality.
          </p>

        </section>

        {/* Media Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">Multimedia Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Podcast */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>🎙️ Debate on Volume II</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A comprehensive discussion of the mathematical formalism, field dynamics, and quantum aspects of Referential Relativity Theory presented in Volume II. Essential for understanding the deeper theoretical framework.
              </p>
              <audio 
                controls 
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '6px',
                  padding: '0.5rem'
                }}
              >
                <source src="/midias/podcast_volume2.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Video */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>▶️ Dynamic Explanation</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A visual and interactive explanation of the mathematical foundations of RRT presented in Volume II. Ideal for understanding complex equations and theoretical concepts through dynamic visualization.
              </p>
              <video 
                controls 
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  backgroundColor: '#000',
                  borderRadius: '6px',
                  maxHeight: '400px'
                }}
              >
                <source src="/midias/video_volume2.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}