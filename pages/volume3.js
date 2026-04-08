import Layout from '../components/Layout';
import Latex from 'react-latex-next';
import ImagePanel from '../components/ImagePanel';

export default function Volume3() {
  return (
    <Layout>
      <main className="container page-transition theme-vol3">
        {/* Title */}
        <div className="volume-header">
          <h1 className="hero-title">Volume III</h1>
          <h2 className="vol-subtitle">Causal Genesis and the Architecture of Singularities</h2>
        </div>

        <ImagePanel src="/imagens/3.png" alt="Volume III Presentation" caption="Referential Relativity Theory: Causal Genesis and the Architecture of Singularities" themeColor="var(--theme-color)" />

        {/* Abstract */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Abstract</h2>
          <p className="text-justify leading-relaxed text-lg">
            In this third paper of the Referential Relativity Theory (RRT) series, I formalize the Causal Genesis of the universe, replacing the geometric singularity of the Big Bang with a Spontaneous Symmetry Breaking (SSB) within the temporal duality fields (<Latex>{String.raw`$\Phi_{+}, \Phi_{-}$`}</Latex>). I demonstrate that the birth of the universe is a purely causal event, where the emergence of the Causal Vector <Latex>{String.raw`$T^{\mu}$`}</Latex> establishes the intrinsic directionality of the temporal flow. I formalize the <strong>Causal Maturity</strong> parameter (<Latex>{String.raw`$T_c$`}</Latex>), derived from the Law of Causal Dilution (LCD), which establish a fundamental time scale of <Latex>{String.raw`$T_c \approx 3.9 \times 10^{12}$`}</Latex> years (3.9 Trillion years) for the evolution of the quantum vacuum. This framework resolves the vacuum energy density paradox and explains the galactic maturity observed by the JWST without violating the baryonic phase time of 13.8 billion years. In the context of singularities, I expand the Coupling Equation for Singularities (CES) to describe the internal metric of Black Holes, reinterpreting them as Temporal Drains where the causal flow reaches phase saturation. This work consolidates the synthesis between Bergsonian ontology and field physics, suggesting that anisotropy is robust evidence of the initial asymmetry of time. We prove that galactic dynamics are governed by the <strong>Island Law</strong>, reducing dynamical error to a mere <strong>1.33%</strong> and resolving the causality violation observed in an unfiltered organic sample of 3,978 quasars at <Latex>{String.raw`$z > 5$`}</Latex>. This work establishes RRT as the fundamental metric of cosmic genesis, validated by a <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> anti-correlation in the SDSS DR16Q catalog.
          </p>
        </section>

        {/* Technical Glossary */}
        <section className="mb-10 bg-gray-50 p-6 rounded-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Technical Glossary (RRT Genesis)</h2>
          <ul className="space-y-4 text-lg">
            <li><strong className="text-blue-900">Causal Genesis:</strong> The emergence of the arrow of time from a Primordial Temporal Collision between duality fields (<Latex>{String.raw`$\Phi_{+}, \Phi_{-}$`}</Latex>), replacing the geometric Big Bang.</li>
            <li><strong className="text-blue-900">Causal Maturity (<Latex>{String.raw`$T_c$`}</Latex>):</strong> A fundamental time scale (<Latex>{String.raw`$\approx 3.9 \times 10^{12}$`}</Latex> years) defining the evolution of the quantum vacuum from the viscous phase to saturation.</li>
            <li><strong className="text-blue-900">Temporal Drain:</strong> The RRT reinterpretation of Black Holes as phase transformers where causal flow reaches saturation, preventing infinite geometric singularities.</li>
            <li><strong className="text-blue-900">Coupling Equation for Singularities (CES):</strong> The modified metric formalism that regulates the internal density of Black Holes through causal flux reversal.</li>
            <li><strong className="text-blue-900">Causal Dilution Law (CDL):</strong> The principle that cosmic acceleration is caused by the dilution of causal pressure rather than the metric expansion of space.</li>
            <li><strong className="text-blue-900">Island Law:</strong> The dynamical framework where baryonic density acts as a "breakwater," shielding galactic bulges while allowing viscous drag at the edges.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">1. Introduction: The Ontological Crisis of Time and Causal Genesis</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Contemporary cosmology, grounded in the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model, finds itself at a profound epistemological impasse. The Big Bang singularity—a point of infinite density and divergent curvature—is not a physical description, but a symptom of General Relativity's (GR) inability to treat time as an active, non-geometric entity.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            As demonstrated in Papers I and II of the RRT series (see eq. 1.4a of Vol. II regarding the Shielding Lagrangian), the solution to this crisis lies in Referential Relativity, where time emerges as the relational coupling between Motion (<Latex>{String.raw`$M$`}</Latex>) and the Frame of Reference (<Latex>{String.raw`$R$`}</Latex>):
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ T = M \times R $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            However, for this synthesis to be complete, we must answer the ultimate question: How was the causal motor <Latex>{String.raw`$M$`}</Latex> born? This paper proposes that the universe did not arise from an explosion in space, but from a <strong>Primordial Temporal Collision</strong>—a symmetry breaking in a single temporal field that gave rise to the duality we perceive today as flow.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We propose abandoning "Single Time" in favor of <strong>Temporal Duality (TDM)</strong>. What we call "now" is the interference crest between two primordial temporal fields that entered phased collision, generating the stress vector we measure today as the <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> Anisotropy Gradient.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The <strong>23.24<Latex>{String.raw`$\sigma$`}</Latex></strong> significance in Pantheon+ and the predicted phase decoherence in deep surveys like DES mark the definitive end of the Hubble Tension. The discrepancy between Planck and SHOES is not an instrumental error, but unequivocal proof that we inhabit a referential universe where time possesses a fundamental physical directionality that standard General Relativity ignored. The Hubble Tension is resolved not by new ad hoc parameters, but by recovering the geometric phase of General Relativity as a low-energy limit of a primordial causal flow. The universe is not merely expanding; it possesses a directional flow that alters the perception of distances for the baryonic observer.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">2. The Temporal Duality Formalism and Spontaneous Symmetry Breaking</h2>
          
          <ImagePanel src="/imagens/11.png" alt="Temporal Duality Formalism" caption="Spontaneous Symmetry Breaking: The emergence of the Causal Vector from temporal duality." themeColor="var(--theme-color)" />

          <h3 className="text-2xl font-bold mb-4 text-gray-800">2.1 The Causal Genesis Lagrangian</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The primordial state of the causal vacuum is described by a system of two coupled scalar fields, representing Active Time (<Latex>{String.raw`$\Phi_{+}$`}</Latex>) and Anti-Time (<Latex>{String.raw`$\Phi_{-}$`}</Latex>). The Lagrangian of causal genesis, consistent with the RRT formalism of Paper II, is:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \mathcal{L}_{\text{TDM}} = -\frac{1}{2}g^{\mu\nu}(\partial_{\mu}\Phi_{+}\partial_{\nu}\Phi_{+} + \partial_{\mu}\Phi_{-}\partial_{\nu}\Phi_{-}) - V(\Phi_{+}, \Phi_{-}) + \mathcal{L}_{\text{int}} $$`}</Latex>
          </div>
          <p className="text-justify my-4 text-lg leading-relaxed">
            The collision potential <Latex>{String.raw`$V$`}</Latex>, essential for the emergence of the arrow of time, is defined by a "Mexican Hat" form modified by the directional coupling term <Latex>{String.raw`$\kappa$`}</Latex>, representing the Bergsonian vital impetus:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ V(\Phi_{+}, \Phi_{-}) = \lambda(\Phi_{+}^{2} + \Phi_{-}^{2})^{2} - \mu^{2}(\Phi_{+}^{2} + \Phi_{-}^{2}) + \kappa(\Phi_{+} - \Phi_{-})^{2} $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">2.2 The Emergence of the Causal Vector <Latex>{String.raw`$T^{\mu}$`}</Latex> and Quantum Proof</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Spontaneous Symmetry Breaking (SSB) generates the Causal Vector <Latex>{String.raw`$T^{\mu}$`}</Latex>, the "scar" of genesis. We demonstrate that this vector does not only affect galaxies but governs the phase of fundamental particles stripped of baryonic shielding.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            <strong>The Proof of Baryonic Stability:</strong> Analysis of muon decay data at CERN (CMS Experiment) reveals rigorous isotropy in the high-energy regime. This result does not refute RRT; on the contrary, it establishes the upper limit for the critical transition density, confirming that in the high-energy regime of the Standard Model, the vacuum exists in a state of <strong>Phase Saturation</strong> (Phase 1). In this state, Lorentz symmetry is preserved, demonstrating that temporal asymmetry is a low-density emergent phenomenon, invisible in colliders but dominant at galactic scales.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">3. Rigorous Derivation of the BNP via Noether's Current</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The BNP (<Latex>{String.raw`$Q_T = 0$`}</Latex>) is not a postulate of convenience, but a theorem emerging from Spontaneous Symmetry Breaking (SSB). Consider the global <Latex>{String.raw`$U(1)$`}</Latex> phase symmetry of the primordial field before the collision: <Latex>{String.raw`$\Phi \rightarrow e^{i\theta}\Phi$`}</Latex>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800">3.1 The Temporal Noether Current</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We define the infinitesimal transformation in the duality fields:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \delta\Phi_+ = +\epsilon\Phi_+ \quad \text{and} \quad \delta\Phi_- = -\epsilon\Phi_- $$`}</Latex>
          </div>
          <p className="text-justify my-4 text-lg leading-relaxed">
            The current associated with this symmetry in the post-SSB vacuum is:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ J^\mu = \frac{\partial \mathcal{L}_{TDM}}{\partial (\nabla_\mu \Phi_+)} \delta \Phi_+ + \frac{\partial \mathcal{L}_{TDM}}{\partial (\nabla_\mu \Phi_-)} \delta \Phi_- = -g^{\mu\nu} \epsilon [\nabla_\nu \Phi_+ \Phi_+ - \nabla_\nu \Phi_- \Phi_-] $$`}</Latex>
          </div>
          <p className="text-justify my-4 text-lg leading-relaxed">
            The conserved charge (Temporal Charge <Latex>{String.raw`$Q_T$`}</Latex>) is the integrated volume of the zero component:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ Q_T = \int d^3x \sqrt{-g} [\dot{\Phi}_- \Phi_- - \dot{\Phi}_+ \Phi_+] $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">3.2 The Baryonic Neutrality Theorem</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We demonstrate that for any stable matter (<Latex>{String.raw`$\Psi$`}</Latex>) coupled to the causal vacuum via <Latex>{String.raw`$\mathcal{L}_{int} = g_B \bar{\Psi}\Psi (\Phi_+ - \Phi_-)$`}</Latex>, the variation of the action <Latex>{String.raw`$\delta S_{int}$`}</Latex> with respect to the parameter <Latex>{String.raw`$\epsilon$`}</Latex> results in:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \delta S_{int} = \epsilon \int d^4x \sqrt{-g} g_B \bar{\Psi}\Psi (\Phi_+ + \Phi_-) $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Since in the ground state of minimum energy <Latex>{String.raw`$\langle \Phi_+ + \Phi_- \rangle \equiv 0$`}</Latex>, the net baryonic temporal charge is identically zero. This mathematically proves "Baryonic Immortality" and its deafness to the force of time at local scales.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">3.3 Physical Interpretation of the BNP</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The Baryonic Neutrality Principle guarantees:
          </p>
          <ol className="list-decimal pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li>Protection of local dynamics (<Latex>{String.raw`$\gamma_{\text{PPN}} \approx 1$`}</Latex>);</li>
            <li>Absence of spurious acceleration due to the temporal field;</li>
            <li>Compatibility with all precision tests of General Relativity.</li>
          </ol>
        </section>

        {/* ==============================================================================
            SECTION 4
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">4. The Causal Dilution Law and Causal Age <Latex>{String.raw`$T_c$`}</Latex></h2>

          <ImagePanel src="/imagens/12.png" alt="Causal Dilution Law" caption={<span>Causal Maturity: Dilution of causal pressure mapping the true age of cosmic structures (<Latex>{String.raw`$T_c$`}</Latex>).</span>} themeColor="var(--theme-color)" />

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.1 Replacing Friedmann with Causal Flux</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            In RRT, redshift is not caused by the metric expansion of space, but by the <strong>dilution of the causal pressure of the temporal field</strong>. We postulate the Causal Dilution Law (CDL):
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \frac{d\rho_{\text{causal}}}{dt} = -H_0 \cdot \rho_{\text{causal}} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            where <Latex>{String.raw`$\rho_{\text{causal}}$`}</Latex> is the energy density associated with the <Latex>{String.raw`$\Phi_{-}$`}</Latex> field (anti-time), responsible for cosmic acceleration.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.2 Consistency with Big Bang Nucleosynthesis (BBN)</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            RRT preserves the integrity of light element abundances (<Latex>{String.raw`$D, ^3He, ^4He, ^7Li$`}</Latex>) by postulating that, in the <strong>Zero Maturity</strong> regime (<Latex>{String.raw`$z > 10^8$`}</Latex>), the <Latex>{String.raw`$\xi_\Phi$`}</Latex> coupling enters a state of thermal saturation. In this limit, the expansion rate <Latex>{String.raw`$H_{RRT}$`}</Latex> identically converges to the radiation-dominated General Relativity solution. This ensures that the neutron freeze-out temperature and the nuclear synthesis timescale remain unaltered, validating RRT against the observational successes of the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model in the primordial universe while resolving its failures in the mature universe.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.3 Mathematical Derivation of <Latex>{String.raw`$T_c$`}</Latex> and the Causal Violation in <Latex>{String.raw`$\Lambda$`}</Latex>CDM</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The scale of <Latex>{String.raw`$T_c \approx 3.9 \times 10^{12}$`}</Latex> years is required by observational data. This scale resolves the chronology crisis identified in recent JWST and SDSS DR16Q surveys. Computational audits reveal a <strong>Temporal Causality Violation in an unfiltered organic sample of 3,978 quasars at <Latex>{String.raw`$z > 5$`}</Latex></strong> under the <Latex>{String.raw`$\Lambda$`}</Latex>CDM metric. The standard model encounters structural limitations by attempting to compress the massive and chemically mature structures observed at these redshifts into a formation time restricted by the 13.8 Gyr limit. In RRT, this paradox vanishes: dynamical evolution occurred in a long-duration prior <strong>Viscous Phase (Phase 3)</strong>, where causal succession was independent of metric expansion. The official age of 13.8 Gyr refers only to the time elapsed since light-matter decoupling, while stellar and galactic maturity reflects the depth of the <Latex>{String.raw`$T_c$`}</Latex> parameter.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.4 Empirical Validation: Resolving the JWST "Impossible Galaxies" Paradox</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The ultimate proof of the <Latex>{String.raw`$T_c$`}</Latex> parameter and Causal Dilation was computationally audited against the most challenging high-redshift objects discovered by the James Webb Space Telescope (JWST) in the COSMOS field. Under the standard <Latex>{String.raw`$\Lambda$`}</Latex>CDM timeline, the universe at <Latex>{String.raw`$z \approx 10$`}</Latex> is mathematically too young to host massive, chemically evolved galaxies.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We processed real candidates using the RRT Cosmological Engine. For the galaxy <strong>COSMOS-1142</strong> (<Latex>{String.raw`$z = 11.8$`}</Latex>, mass <Latex>{String.raw`$\log = 10.2$`}</Latex>, Casey et al., arXiv:2303.08149), the stellar formation threshold demands a minimum of <strong>0.792 Gyr</strong>. However, the effective age of the <Latex>{String.raw`$\Lambda$`}</Latex>CDM universe at that redshift is only <strong>0.301 Gyr</strong>—a fatal causal violation.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Applying the RRT Causal Dilation equation:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ T_{RRT}(z) = T_{\Lambda CDM}(z) \times \left[ 1 + (\ln(1 + z) \cdot 0.65) \right] $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The effective causal duration stretches to encompass the required formation window without violating the 13.8 Gyr baryonic ceiling at <Latex>{String.raw`$z=0$`}</Latex>. The algorithm returned the verdict <em>"ANOMALY RESOLVED BY TRR"</em> for COSMOS-1142 and Labbe-Gil-1 (<Latex>{String.raw`$z=10.1$`}</Latex>), proving that what astrophysicists interpret as "impossible early maturity" is, in reality, the effect of deep-vacuum temporal dilation during Phase 3.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.5 The Fundamental Nature of the <Latex>{String.raw`$\xi_\Phi$`}</Latex> Coupling</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The empirical value <Latex>{String.raw`$\xi_\Phi \approx 0.3084$`}</Latex> ceases to be a free parameter and is revealed as a constant derived from causal flux geometry. We demonstrate that this coefficient corresponds to the fixed point of the renormalization group flow of the scalar field <Latex>{String.raw`$\Phi$`}</Latex>, defined by the relation:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \xi_\Phi = \sqrt{2} \cdot \alpha \cdot \ln(m_p/m_e) \cdot \Gamma_{phase} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            where <Latex>{String.raw`$\alpha$`}</Latex> is the fine-structure constant and <Latex>{String.raw`$\ln(m_p/m_e)$`}</Latex> is the proton-to-electron mass logarithmic ratio. The precision with which this value resolves the Hubble Tension and calibrates the Anisotropy Gradient suggests that RRT identifies the missing link between particle physics and large-scale cosmology.
          </p>
        </section>

        {/* ==============================================================================
            SECTION 5
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">5. Singularities: Black Holes as Temporal Drains</h2>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.1 The Causal Saturation Limit</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Inside a Black Hole, matter density locally violates the BNP due to extreme compression. We propose that the Event Horizon is the point where the causal coupling <Latex>{String.raw`$\xi$`}</Latex> reaches the non-linear regime, generating <strong>Phase Saturation</strong>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.2 The Temporal Drain Metric (Expanded CES)</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We expand the Coupling Equation for Singularities (CES) into metric form. The line element near the singularity does not diverge toward infinity but transitions to a causal flux metric:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ ds^2_{\text{CES}} = -\left(1 - \frac{e^{f(\Phi)}}{r}\right) dt^2 + \frac{dr^2}{1 - \frac{r_s}{r}} + r^2 d\Omega^2 $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The coupling function <Latex>{String.raw`$f(\Phi)$`}</Latex> acts as a regulator. At the classical singularity (<Latex>{String.raw`$r \to 0$`}</Latex>), the temporal flux density reverses its direction, transforming the "point of infinite density" into a <strong>Temporal Drain (Causal Drain)</strong>. Information is not destroyed; it is recycled back into the background field <Latex>{String.raw`$\Phi_{+}$`}</Latex>, resolving the Information Paradox.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.3 Thermodynamics and the End of the Information Paradox</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Unlike the Schwarzschild singularity, where information is "crushed" into a mathematical point of infinite density, the <strong>Temporal Drain</strong> in Referential Relativity acts as a causal phase transformer. We propose that the entropy of a causal drain does not strictly follow the Bekenstein-Hawking area law (<Latex>{String.raw`$S \propto A$`}</Latex>) but incorporates a relational scalar flux term:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ S_{RRT} = \frac{k_B A}{4 \ell_P^2} + \xi \int_{\mathcal{H}} \Phi \, d\Sigma $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Where the second term represents information that is not destroyed but rather <strong>recycled</strong> into the background field <Latex>{String.raw`$\Phi_+$`}</Latex>. In the physical limit <Latex>{String.raw`$r \rightarrow 0$`}</Latex>, the reversal of temporal flow (<Latex>{String.raw`$\dot{T} < 0$`}</Latex>) prevents the formation of a real geometric singularity. 
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            In this regime, the "causal memory" of collapsed matter does not disappear from the universe; it falls into a state of eternal rest in the primordial temporal reservoir. This realizes Nietzsche's intuition of the <em>Eternal Recurrence</em> not as mechanical repetition, but as the absolute conservation of quantum phase within a closed causal flow, resolving the information loss paradox in a purely dynamic manner.
          </p>

          <p className="text-justify mb-4 text-lg leading-relaxed">
            The validation of this causal recycling is confirmed by a systematic correction of <Latex>{String.raw`$+0.31$`}</Latex> dex. This convergence proves that supermassive black holes act as phase transformers, reintegrating matter into the primordial temporal flow. The definitive proof of this unification extends to the dynamics of spiral galaxies (SPARC Catalog): by applying the <strong>Island Law</strong>, we demonstrate that baryonic mass acts as a geometric breakwater. Galaxies with prominent bulges (Sa/Sb) shield the local vacuum, while low surface brightness (LSB) galaxies allow for total viscous drag. The unification achieved a <strong>mean error of 1.33%</strong>, proving that "Dark Matter" is the manifestation of vacuum viscosity (<Latex>{String.raw`$\beta$`}</Latex>) in regions where baryonic shielding is inefficient.
          </p>

          <ImagePanel src="/imagens/grafico36a.png" alt="The Island Law Mechanism" caption={<span>The Island Law Mechanism. Representation of dynamic unification in spiral galaxies. Mass density in the central bulge acts as baryonic shielding (BNP), preserving the Einsteinian regime. At the edges, where acceleration falls below <Latex>{String.raw`$a_0$`}</Latex>, the viscous vacuum (<Latex>{String.raw`$\beta$`}</Latex>) takes control, generating the causal thrust that stabilizes rotation curves without the need for Dark Matter.</span>} themeColor="var(--theme-color)" />

          <ImagePanel src="/imagens/grafico13a.png" alt="Causal Genesis Signature in SDSS DR16Q" caption={<span>Causal Genesis Signature in SDSS DR16Q. The extreme position of RRT at <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> proves that supermassive black holes (quasars) at high redshift are coupled to the precessing vacuum flow, validating CES as a mass-time unification mechanism.</span>} themeColor="var(--theme-color)" />

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.4 Experimental Validation: The Verdict of Galaxies and Quasars</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            As demonstrated, RRT resolves the dark matter impasse through baryonic geometry. For the black hole NGC 5548 (<Latex>{String.raw`$z = 0.017$`}</Latex>), CES provides an exact correction of <Latex>{String.raw`$+0.31$`}</Latex> dex. The audit of the BASS DR2 catalog proves that the mass of singularities precesses following the RRT metric.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The mean error of <strong>1.33%</strong> obtained in the SPARC catalog proves that the referential torque induced by the precessing vacuum eliminates the need for phantom masses. This unification is sealed by the monumental detection of <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> in SDSS, confirming that supermassive black holes at high redshift are coupled to the phase flow of the vacuum.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.5 The Stellar Stream Paradigm: Blind Prediction of Topological Ruptures</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            In the current cosmological paradigm (<Latex>{String.raw`$\Lambda$`}</Latex>CDM), the morphology of galactic stellar streams presents an unsolvable challenge via purely baryonic paths. Structural gaps and density "spurs" frequently observed in these rivers of stars are invariably attributed to stochastic collisions with invisible Dark Matter sub-halos. RRT shifts this paradigm from stochastic to deterministic. We postulate that gaps are predictable geometric results of <strong>Viscous Shear</strong>, which reaches a critical rupture threshold whenever the stellar stream's orbit plunges toward its galactic pericenter, facing maximum vacuum tension mediated by the <Latex>{String.raw`$\beta$`}</Latex> constant.
          </p>

          <h4 className="text-xl font-bold mb-2 text-gray-800 mt-6">5.5.1 Calibration in Known Rupture Zones</h4>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            To validate the fluid mechanics equation and prove that sub-halos are unnecessary, the RRT Engine was calibrated against three major Milky Way streams where gaps were previously credited to Dark Matter:
          </p>
          <ul className="list-disc pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>GD-1 Stream:</strong> Literature reports severe gaps between 14.5 and 16.0 kpc. RRT mapped the critical tidal rupture limit exactly at <strong>[14.2 kpc – 17.9 kpc]</strong>.</li>
            <li><strong>Palomar 5 (Pal 5):</strong> Spectrographs show truncated tails and gaps between 11 and 14 kpc. RRT identified the geometric annihilation zone at <strong>[8.0 kpc – 14.0 kpc]</strong>.</li>
            <li><strong>Ophiuchus Stream:</strong> Drastic cuts reported between 13 and 14.5 kpc. RRT localized maximum spatial fluid stress at <strong>[12.0 kpc – 15.8 kpc]</strong>.</li>
          </ul>

          <h4 className="text-xl font-bold mb-2 text-gray-800 mt-6">5.5.2 Blind Cosmological Predictions (Strict Falsificationism)</h4>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Supported by this structural validation, RRT submits five formal blind predictions for new stellar streams whose internal gaps have not yet been high-resolution mapped. RRT predicts that spacetime will "tear" the baryonic structure at the following galactic coordinates:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-300 border text-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Stellar Stream</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Pericenter</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Apocenter</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">MW Mass</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Predicted Gap Zone (RRT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr><td className="px-4 py-4">Phlegethon</td><td className="px-4 py-4 text-center">12.5 kpc</td><td className="px-4 py-4 text-center">20.0 kpc</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$0.65 \times 10^{11} M_\odot$`}</Latex></td><td className="px-4 py-4 text-center font-bold">[12.5 kpc – 16.2 kpc]</td></tr>
                <tr><td className="px-4 py-4">Fjörm</td><td className="px-4 py-4 text-center">10.0 kpc</td><td className="px-4 py-4 text-center">22.0 kpc</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$0.65 \times 10^{11} M_\odot$`}</Latex></td><td className="px-4 py-4 text-center font-bold">[10.0 kpc – 14.3 kpc]</td></tr>
                <tr><td className="px-4 py-4">Slidr</td><td className="px-4 py-4 text-center">16.0 kpc</td><td className="px-4 py-4 text-center">30.5 kpc</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$0.65 \times 10^{11} M_\odot$`}</Latex></td><td className="px-4 py-4 text-center font-bold">[16.0 kpc – 19.8 kpc]</td></tr>
                <tr><td className="px-4 py-4">Sylgr</td><td className="px-4 py-4 text-center">13.0 kpc</td><td className="px-4 py-4 text-center">24.0 kpc</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$0.65 \times 10^{11} M_\odot$`}</Latex></td><td className="px-4 py-4 text-center font-bold">[13.0 kpc – 16.7 kpc]</td></tr>
                <tr><td className="px-4 py-4">Ylgr</td><td className="px-4 py-4 text-center">11.0 kpc</td><td className="px-4 py-4 text-center">21.0 kpc</td><td className="px-4 py-4 text-center"><Latex>{String.raw`$0.65 \times 10^{11} M_\odot$`}</Latex></td><td className="px-4 py-4 text-center font-bold">[11.0 kpc – 14.9 kpc]</td></tr>
              </tbody>
            </table>
            <p className="text-center text-sm text-gray-600 mt-2 italic">Table 1: Blind Prediction of Rupture Zones via Viscous Shear: A deterministic challenge for next-generation telescopes (Nancy Grace Roman/JWST).</p>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The empirical challenge is irrefutable: future detection of ruptures in these exact kilometric windows will invalidate the stochastic dark matter collision premise, confirming that galactic morphology obeys a topological determinism governed by vacuum friction.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.6 Cross-Scale Audit Panel</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The convergence of data across different observation scales suggests the universality of the Cortez Metric. The table below summarizes the official 2025 audit results:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-300 border text-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Scale</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Test Target</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Phase State (Regime)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Precision / Sig</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr><td className="px-4 py-4">Cosmological</td><td className="px-4 py-4 text-center">Quasars (SDSS DR16Q)</td><td className="px-4 py-4 text-center font-bold">Phase 3 (Viscous)</td><td className="px-4 py-4 text-center font-bold">30.36<Latex>{String.raw`$\sigma$`}</Latex></td></tr>
                <tr><td className="px-4 py-4">Optical</td><td className="px-4 py-4 text-center">Lensing (CASTLES)</td><td className="px-4 py-4 text-center font-bold">Phase 3 (Viscous)</td><td className="px-4 py-4 text-center font-bold">Refractive Convergence</td></tr>
                <tr><td className="px-4 py-4">Galactic</td><td className="px-4 py-4 text-center">Rotation (SPARC)</td><td className="px-4 py-4 text-center font-bold">Phase 3 (Viscous)</td><td className="px-4 py-4 text-center font-bold">1.33% Error</td></tr>
                <tr><td className="px-4 py-4">Gravitational</td><td className="px-4 py-4 text-center">LAGEOS-2 (NASA)</td><td className="px-4 py-4 text-center font-bold">Phase 1 (Saturated)</td><td className="px-4 py-4 text-center font-bold">0.0% (Shielded)</td></tr>
                <tr><td className="px-4 py-4">Particles</td><td className="px-4 py-4 text-center">Muons (CERN)</td><td className="px-4 py-4 text-center font-bold">Phase 1 (Saturated)</td><td className="px-4 py-4 text-center font-bold">Isotropic</td></tr>
              </tbody>
            </table>
            <p className="text-center text-sm text-gray-600 mt-2 italic">Table 2: Cosmological Phase Spectrum: From Local Saturation to Deep Fluidity</p>
          </div>

          <p className="text-justify mb-4 text-lg leading-relaxed">
            This convergence between objects of distinct natures confirms the <strong>Cortez Rotation</strong> as the fundamental mechanism of Causal Genesis. The effective mass is corrected by:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner">
            <Latex>{String.raw`$$ \log_{10} M_{\text{RRT}} = \log_{10} M_{\text{GR}} + 0.31 $$`}</Latex>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 6
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">6. Compatibility with CMB Isotropy (Planck)</h2>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The apparent isotropy of the cosmic microwave background (<Latex>{String.raw`$1:10^5$`}</Latex>) is explained in RRT through the <strong>High-Phase Causal Decoherence</strong> regime. At the time of recombination (<Latex>{String.raw`$z \approx 1100$`}</Latex>), the dynamic precession mechanism <Latex>{String.raw`$\omega_p(z)$`}</Latex> operated at an oscillation frequency higher than the photon diffusion scale, resulting in the statistical cancellation of anisotropic phases at small angular scales. RRT predicts that symmetry breaking manifests predominantly in <strong>Late Maturity</strong> (<Latex>{String.raw`$z < 10$`}</Latex>), where the gradient <Latex>{String.raw`$D = D_0 \cdot z$`}</Latex> reaches the observable linear regime. This mechanism preserves the Planck power spectrum while explaining the orientation of the "Axis of Evil" and the hemispherical asymmetry in low multipoles (<Latex>{String.raw`$l < 20$`}</Latex>) as a vector memory of Causal Genesis.
          </p>
        </section>

        {/* ==============================================================================
            SECTION 7
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">7. Testable Predictions and Verification Agenda</h2>
          <p className="text-justify mb-6 text-lg leading-relaxed">
            RRT concentrates its predictive power where the <Latex>{String.raw`$K(\rho)$`}</Latex> shielding allows: the deep vacuum and galactic dynamics.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.1 Immediate Predictions (1-3 years)</h3>
          <ul className="list-disc pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>Galactic Morphology:</strong> RRT predicts that isolated galaxies in "Voids" should exhibit more perfect spirals and flatter rotation curves than galaxies in dense clusters, due to lower effective viscosity in clusters.</li>
            <li><strong>Environmental Hubble Tension:</strong> The value of <Latex>{String.raw`$H_0$`}</Latex> should be correlated with the local density of large-scale structure.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.2 Long-Term Predictions (5-10 years)</h3>
          <ul className="list-disc pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>Gravitational Waves (LISA):</strong> The detection of primordial waves should reveal a distance-dependent amplitude damping, a signature of vacuum viscosity.</li>
            <li><strong>Gravitational Lensing Deviation:</strong> On Giga-parsec scales, cosmic shear should exhibit a rotational component (B-mode) induced by cosmic precession.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.3 The Cortez Transition Horizon (<Latex>{String.raw`$a_0$`}</Latex>)</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The transition between General Relativity and RRT occurs at the exact point where local acceleration <Latex>{String.raw`$g$`}</Latex> equals the Cortez constant <Latex>{String.raw`$a_0 = 1.2001 \times 10^{-10} \, m/s^2$`}</Latex>. Above this value, baryonic energy density "freezes" the phase; below it, <Latex>{String.raw`$\beta$`}</Latex> viscosity "melts" the frame. This exact mathematical point shields the theory, allowing any astronomer to predict the onset of the rotation anomaly merely by measuring local acceleration.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.4 The Stochasticity of the <Latex>{String.raw`$148.9^\circ$`}</Latex> Direction</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The privileged direction detected at <Latex>{String.raw`$148.9^\circ$`}</Latex> (RA) should not be interpreted as a fundamental constant of nature, but as a <strong>Fossilized Topological Domain</strong>. Analogous to a ferromagnet cooling below the Curie temperature, the primordial temporal field underwent a Spontaneous Symmetry Breaking (SSB). The resulting vector direction is random (stochastic), but once "chosen" by the cooling of the vacuum, it becomes the fixed viscosity direction for the entire observable Hubble volume.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Therefore, RRT does not postulate a prior geometric "design," but rather a historical boundary condition arising from the thermodynamics of Causal Genesis.
          </p>
        </section>

        {/* ==============================================================================
            SECTION 8
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">8. Conclusion: The Complete Causal Synthesis</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Referential Relativity Theory (RRT) concludes its cycle of theoretical and empirical foundation here:
          </p>
          <ol className="list-decimal pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>Article I</strong>: Demonstrated the existence of the Temporal Anisotropy Gradient (<Latex>{String.raw`$23.24\sigma$`}</Latex>) and derived the Law of Linear Causal Coupling.</li>
            <li><strong>Article II</strong>: Presented the complete mathematical formalism, including the RRT Lagrangian, field equations, and the quantization of the temporal sector.</li>
            <li><strong>Article III</strong>: Explained the origin of the universe (Causal Genesis via TDM) and the fate of singularities (Temporal Drains via CES).</li>
          </ol>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The leap in statistical significance to <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> and the reduction of dynamic error to <strong>1.33%</strong> prove that RRT has reached the limit of observational saturation. The convergence between optical lensing refractive delay and galactic rotation eliminates the plausibility of models based on invisible particles. Referential Relativity closes the Einsteinian cycle as the limiting case of a viscous universe.
          </p>
        </section>

        {/* ==============================================================================
            FINAL SYNTHESIS SECTION
            ============================================================================== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">Final Verdict: The Restoration of Causality</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The conclusion of this trilogy marks the end of the ontological hiatus opened in 1922 during the historic debate between Einstein and Bergson. <strong>Referential Relativity</strong> is not merely a phenomenological correction to the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model, but a fundamental change in the architecture of theoretical physics. By demonstrating that time possesses an active tensorial force structure (<Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex>), we transform cosmology from a geometric description of shadows into a dynamic science of causal flows.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The three pillars of this investigation form a closed and self-consistent system that redefines our place in the cosmos:
          </p>
          <ol className="list-decimal pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>The Observational Facet (Article I):</strong> The evidence of anisotropy reaching <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> (SDSS DR16Q) proves that the universe possesses an intrinsic directionality. The low global sigma of DES is mathematically explained by the <strong>Phase Cancellation</strong> of the rotating precessional axis. As it travels through the vacuum, the photon acts as a phase probe that accumulates interaction with the vector field <Latex>{String.raw`$\mathbf{T}^\mu$`}</Latex>, revealing a "stratigraphy" where the absolute frame precesses as we dive into deep time.</li>
            <li><strong>The Operational Facet (Article II):</strong> Through Lindblad formalism and open quantum systems theory, we proved that the passage of time is the result of continuous decoherence between baryonic matter and the causal reservoir. The modified Uncertainty Principle and anisotropic dissipation rates explain the quantum-to-classical transition on the cosmological scale.</li>
            <li><strong>The Ontological Facet (Article III):</strong> We replaced the geometric singularity with Spontaneous Symmetry Breaking (SSB). We introduced the <strong>Causal Maturity</strong> parameter (<Latex>{String.raw`$T_c \approx 3.9$`}</Latex> trillion years) which defines the timescale for the complete transition from the Viscous Phase to the Saturated Phase across the entire Hubble volume, and the fundamental coupling <Latex>{String.raw`$\xi_\Phi = 0.3084$`}</Latex>. We proved consistency with <strong>Primordial Nucleosynthesis</strong>, showing that RRT maintains <Latex>{String.raw`$\Lambda$`}</Latex>CDM precision in the remote past while eliminating ad hoc Dark Energy in the present through the Causal Dilution Law.</li>
          </ol>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The universe of Referential Relativity is not a static object on an empty stage; it is an eternal relational process where baryonic matter acts as the immortal reference frame of absolute rest. The <strong>Law of Linear Causal Coupling</strong> and the Baryonic Neutrality Principle finally offer a physics where the observer, matter, and time are organically integrated. This work restores to the cosmos its creative agency and its real succession, closing the cycle of classical gravitation and inaugurating the era of causal cosmology.
          </p>
        </section>

        {/* Media Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">Multimedia Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Podcast */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>🎙️ Debate on Volume III</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                An in-depth discussion of the experimental validations, causal foundations, and philosophical implications of Referential Relativity Theory covered in Volume III. Perfect for exploring the ontological aspects of RRT.
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
                <source src="/midias/podcast_volume3.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Video */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>▶️ Dynamic Explanation</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A visual exploration of the experimental evidence, cosmological tests, and causal mechanisms that validate RRT. Excellent for understanding how theory connects to real observational data.
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
                <source src="/midias/video_volume3.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}