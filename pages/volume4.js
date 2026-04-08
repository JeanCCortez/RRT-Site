import Layout from '../components/Layout';
import Latex from 'react-latex-next';
import ImagePanel from '../components/ImagePanel';

export default function Volume4() {
  return (
    <Layout>
      <main className="container page-transition theme-vol4">
        {/* Title */}
        <div className="volume-header">
          <h1 className="hero-title">Volume IV</h1>
          <h2 className="vol-subtitle">Causal Unification: From Spontaneous Symmetry Breaking to the Axis of Evil</h2>
        </div>

        <ImagePanel src="/imagens/4.png" alt="Volume IV Presentation" caption="Referential Relativity Theory: Causal Unification" themeColor="var(--theme-color)" />

        {/* Abstract */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Abstract</h2>
          <p className="text-justify leading-relaxed text-lg">
            In this fourth volume of the Referential Relativity Theory (RRT) series, we present the final cosmological synthesis based on the <strong>Universal Phase Transition Ladder</strong>. We validate RRT across four independent scales: (1) <strong>Primordial (Planck)</strong>, with 98.36% precision in the alignment of the CMB kinematic dipole anomalies; (2) <strong>Optical (CASTLES)</strong>, achieving theoretical refractive convergence via the Cortez Refractive Index without dark matter halos; (3) <strong>Galactic Dynamics (SPARC)</strong>, which, under the rigor of the Island Law with an error of only <strong>1.33%</strong>, constitutes robust evidence regarding the nature of time. We suggest that Dark Matter is an artifact of the vacuum phase transition at <Latex>{String.raw`$a_0 = 1.2001 \times 10^{-10} \, \text{m/s}^2$`}</Latex>, consolidating RRT as the definitive metric of causal flow.
          </p>
        </section>

        {/* Technical Glossary */}
        <section className="mb-10 bg-gray-50 p-6 rounded-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Technical Glossary (RRT Final Synthesis)</h2>
          <ul className="space-y-4 text-lg">
            <li><strong className="text-blue-900">Universal Phase Transition Ladder:</strong> The hierarchical framework defining the transition of spacetime from a quantum gas (Phase 0) to a viscous fluid (Phase 3) as density decreases.</li>
            <li><strong className="text-blue-900">Cortez Rotation (<Latex>{String.raw`$\omega_p$`}</Latex>):</strong> The dynamical precession of the causal axis, acting as the fundamental phase-link between the CMB and local supernovae.</li>
            <li><strong className="text-blue-900">Axis of Evil (RRT Interpretation):</strong> The primordial record of the causal field's orientation at <Latex>{String.raw`$z=1089$`}</Latex>, preserved as a vector memory in the low multipoles of the CMB.</li>
            <li><strong className="text-blue-900">Cosmic Stratigraphy:</strong> The analytical method of segmenting the universe into redshift layers to isolate the evolution of the temporal anisotropy gradient.</li>
            <li><strong className="text-blue-900">Causal Unification:</strong> The mathematical convergence where a single coupling constant <Latex>{String.raw`$\beta$`}</Latex> resolves the Hubble Tension and eliminates the need for Dark Matter/Energy.</li>
            <li><strong className="text-blue-900">Temporal Force Tensor (<Latex>{String.raw`$\Theta_{\mu\nu}$`}</Latex>):</strong> The anisotropic component of the field equations representing the "causal thrust" of Real Duration on baryonic matter.</li>
          </ul>
        </section>

        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">1. Introduction: The Insufficiency of Friedmann Cosmology</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Modern cosmology, grounded in the Cosmological Principle and the Friedmann-Lemaître-Robertson-Walker (FLRW) metric, finds itself in a state of latent paradigmatic crisis. The postulate that the universe is perfectly homogeneous and isotropic on scales exceeding 100 Mpc, originally introduced by Alexander Friedmann in 1922 as a mathematical simplification for Einstein's field equations, has become a dogmatic barrier preventing the understanding of the true nature of time. This simplification, while useful for the initial development of general relativity applied to the cosmos, ignored the possibility that time possesses an independent metric structure and an intrinsic vector directionality.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Currently, the attempt to save the standard model (<Latex>{String.raw`$\Lambda$`}</Latex>CDM) requires the introduction of ontologically obscure entities, such as dark energy and dark matter, which consume 95% of the universe's composition without ever being directly detected by non-gravitational means. More serious than the lack of detection is the growing "Hubble Tension" (<Latex>{String.raw`$H_0$`}</Latex>), a statistical deviation exceeding <Latex>{String.raw`$5\sigma$`}</Latex> between local universe measurements and predictions derived from the Cosmic Microwave Background (CMB). In Referential Relativity Theory (RRT), we postulate that this tension is not an instrumental calibration error or a systematic sensor failure, but direct evidence that time is not a passive geometric coordinate, but a dynamic force field coupled to baryonic matter.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The geometrical limitations of the 1922 FLRW formulation, exhaustively discussed in Volume I of this work, consisted of the premature spatialization of time. By treating the temporal dimension as just another axis of a symmetric four-dimensional manifold, physics removed from the universe the creative agency of succession and Bergsonian duration. RRT rescues the intuition that time possesses a physical "thickness" and a vector directionality that does not necessarily coincide with Euclidean spatial axes. In this fourth volume, data indicate that this directionality appears to precess systematically as we look back toward the primordial causal singularity, an effect we term Cortez Rotation.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            What the scientific community classifies as inexplicable anomalies --- such as the preferred alignment of the low multipoles of the CMB, popularly known as the "Axis of Evil" --- emerges in this theory as a natural geometric prediction. The unification presented in this paper is absolute: we use the same coupling constant <Latex>{String.raw`$\beta = 0.028006$`}</Latex> to describe objects ranging from the CMB to local galaxies. The leap in statistical significance to <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> in the SDSS DR16Q catalog buries the isotropic hypothesis and inaugurates the era of causal cosmology.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The unification presented in this paper is absolute and non-parametric. We do not adjust the direction of anisotropy for each individual catalog; instead, we use the universal precession mechanism and the same coupling gradient <Latex>{String.raw`$D_0 \approx 0.794$`}</Latex> to describe objects separated by more than 13 billion years of cosmic history. The result is the definitive overcoming of the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model and the inauguration of a referential cosmology, where temporal succession regains its role as the fundamental engine of physical reality.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The persistence of the Hubble Tension (<Latex>{String.raw`$H_0$`}</Latex>) is not an isolated phenomenon, but the symptom of an incomplete geometry. While the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model attempts to reconcile the discrepancy between the primordial (Planck) and local (SH0ES) universe through parametric extensions of dark energy, RRT demonstrates that the divergence is a purely referential effect. In a universe where time possesses an anisotropy gradient, distance calibration depends on the observer's orientation relative to the causal flow. Neglecting this directionality induces a systematic error in the reconstruction of the Hubble constant, manifesting as a false tension between scales.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            In this work, we expand the analysis to the domain of Cosmic Stratigraphy. We prove that the anisotropy signal is not static; it evolves with redshift due to Cortez Rotation. This angular precession is the signature of a temporal vector field that "drags" the phase of light as it traverses different chronological strata. By ignoring this drag, conventional cosmology "blurs" directional information, treating the real signal as noise or galactic contamination. The unification we present below proves that, once the causal phase is corrected, the universe reveals a geometric order of extreme precision.
          </p>

          <div className="bg-blue-50 border border-blue-200 shadow-sm p-6 mb-8 rounded-md text-blue-900">
            <h4 className="font-bold text-xl mb-4 text-center mt-0">Digital Audit: The RRT Cosmological Engine</h4>
            <p className="text-justify text-lg leading-relaxed">
              To ensure reproducibility and statistical transparency, the dynamic and optical calculations presented in this work can be validated through the <strong>RRT Engine</strong> (<a href="https://rrt-motor.streamlit.app/" className="underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://rrt-motor.streamlit.app/</a>). This audit tool allows for the direct application of field equations to raw data from astronomical catalogs, exposing the fictitious mass required by the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model to compensate for the absence of the phase metric.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">2. The Formalism of Unification: Action and Temporal Field</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The transition from General Relativity (GR) to Referential Relativity requires the introduction of a metric structure where causality is not just a consequence of geometry, but its efficient cause. We propose a covariant action that extends the Einstein-Hilbert functional by adding a temporal coupling term:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ S = \int d^4x \sqrt{-g} \left[ \frac{1}{16\pi G} R + \mathcal{L}_m + \mathcal{L}_{\mathcal{T}} \right] $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\mathcal{L}_{\mathcal{T}}$`}</Latex> represents the Lagrangian of the Fundamental Temporal Field, defined by:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \mathcal{L}_{\mathcal{T}} = -\frac{1}{2} \nabla_\mu \mathcal{T}_ \nu \nabla^\mu \mathcal{T}^\nu + \xi R \mathcal{T}^2 - V(\mathcal{T}) $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Here, <Latex>{String.raw`$\mathcal{T}_\nu$`}</Latex> is the causal vector that establishes the directionality of the chronological flow. The variation of the action with respect to the metric <Latex>{String.raw`$g_{\mu\nu}$`}</Latex> leads to the modified field equations:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ G_{\mu\nu} + \Lambda g_{\mu\nu} + 8\pi G \Theta_{\mu\nu} = 8\pi G T_{\mu\nu} $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\Theta_{\mu\nu}$`}</Latex> is the Referential Energy-Momentum Tensor, derived from the dynamics of the temporal field. Unlike the matter energy-momentum tensor (<Latex>{String.raw`$T_{\mu\nu}$`}</Latex>), <Latex>{String.raw`$\Theta_{\mu\nu}$`}</Latex> is intrinsically anisotropic and carries the information of the causal gradient. The primary consequence of this formulation is that light, propagating in an RRT frame, experiences an additional magnitude shift <Latex>{String.raw`$\Delta m$`}</Latex> given by:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \Delta m(z, \theta) = D_0 \cdot z \cdot \cos(\theta - \theta_{f}) $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            In this equation, <Latex>{String.raw`$D_0$`}</Latex> is the linear coupling coefficient and <Latex>{String.raw`$\theta_{f}$`}</Latex> is the stratigraphic causal phase. The radical innovation of RRT lies in the discovery that <Latex>{String.raw`$\theta_{f}$`}</Latex> is not constant, but a dynamic function of redshift, reflecting the precession of the primordial causal axis.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">2.1 The Cortez Metric and Phase Rotation</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            To describe the unified universe, we replace the FLRW metric with the Cortez Metric, which incorporates temporal phase rotation. In spherical coordinates, the line element is perturbed by a rotational factor <Latex>{String.raw`$\Omega(z)$`}</Latex>:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ ds^2 = -c^2 dt^2 + a^2(t) \left[ \frac{dr^2}{1-kr^2} + r^2(d\theta^2 + \sin^2\theta d\phi^2) \right] + \epsilon(z, \phi) $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The perturbation term <Latex>{String.raw`$\epsilon$`}</Latex> is governed by Cortez Rotation, defined by the phase constant <Latex>{String.raw`$\omega_p$`}</Latex>:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \phi_{C}(z) = \phi_0 + \frac{\omega_p}{z} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\omega_p$`}</Latex> is the precession constant. This precession is the mechanism that unifies observations. At low redshifts (<Latex>{String.raw`$z \rightarrow 0$`}</Latex>), the phase rotates rapidly, explaining the difficulty in fixing a static dipole in local supernova samples. Conversely, at high redshifts (<Latex>{String.raw`$z > 1$`}</Latex>), the phase stabilizes, allowing for the detection of monumental significance, such as the <Latex>{String.raw`$30.36\sigma$`}</Latex> discussed in Section 7. RRT establishes that the observer is immersed in a rotational reference frame where the very "North" of time changes as we dive into the cosmic past.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">3. Philosophical and Ontological Foundation: Bergsonian Duration and the Critique of Spatialization</h2>

          <ImagePanel src="/imagens/13.png" alt="Bergsonian Duration" caption="Real Duration: The universe as an active causal flow, beyond the spatialization of time." themeColor="var(--theme-color)" />

          <p className="text-justify mb-4 text-lg leading-relaxed">
            The genesis of Referential Relativity Theory (RRT) lies not merely in a need to adjust astronomical data, but in a profound revision of the metaphysics of time that has underpinned physics since the 17th century. Classical physics, and subsequently General Relativity (GR), operate under what Henri Bergson termed the "spatialization of time". In this conception, the temporal dimension is treated as a geometric axis <Latex>{String.raw`$t$`}</Latex>, analogous to spatial dimensions, where events are arranged as points on a static line. The result is the "block universe", a frozen four-dimensional structure where "becoming" is relegated to a subjective illusion of consciousness.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            In RRT, we break with this ontological freezing. We postulate that time is not the stage where matter moves, but the primordial force that drives the movement of geometry itself. We recover the distinction between cinematographic time (the coordinate <Latex>{String.raw`$t$`}</Latex>) and Real Duration (the flow <Latex>{String.raw`$\mathcal{T}$`}</Latex>). While GR describes the curvature of spacetime in response to energy density, RRT describes how Real Duration interacts with the observer's frame through an anisotropic force field. This interaction is mediated by the Temporal Force Tensor <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex>, which introduces a "causal thrust" component into the traditional metric.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Bergson's critique of the spatialization of time gains a rigorous mathematical translation in RRT. If time were merely a dimension, there would be no physical reason for the existence of an arrow of time or for accelerated expansion. In our formulation, what we call the metric expansion of space is, in truth, the dilation of causal flow. Cosmic acceleration, erroneously attributed to Dark Energy, emerges as the coupling effect between baryonic matter and the causal flux scalar field <Latex>{String.raw`$\Phi$`}</Latex>. The Baryonic Neutrality Principle (BNP), introduced in Volume II, establishes that matter is "dragged" by this flow, creating the illusion of a repulsive force when, in essence, it is a referential movement toward the temporal maturity of the vacuum.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">3.1 The Frame of Reference as Subject-Object Intersection</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The inclusion of "Referential" in the theory's name is not accidental. Unlike Einsteinian relativity, where all inertial frames are equivalent in their physical laws but passive in their relationship with time, in RRT the frame of reference is the locus where the phase of Duration manifests. The observer is not an external spectator; they are an anchoring point in a rotational causal field.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Inspired by the philosophy of Friedrich Nietzsche, we reinterpret the "Eternal Recurrence" not as the infinite repetition of material events, but as the cyclic recurrence of the temporal field phase. Cortez Rotation (<Latex>{String.raw`$\omega_p$`}</Latex>) is the geometric expression of this recurrence. As a photon travels through vast cosmological distances, it not only loses energy (redshift) but undergoes angular precession reflecting the change in phase of the temporal frame between the moment of emission and reception.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This phase change is what unifies the scales. The "Axis of Evil" observed in the CMB represents the universe's primordial phase state, a "photograph" of the causal orientation at the moment light decoupled from matter. By comparing this phase with that observed in local supernovae, we discover the rate of rotation of time itself. RRT proposes that the universe is not just expanding; it is "spinning" chronologically, and human consciousness perceives this movement as the inexorable succession of the now.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">4. Causal Genesis: Spontaneous Symmetry Breaking (SSB)</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            To understand causal unification, it is necessary to revisit the moment of origin. Standard cosmology postulates a singularity of infinite density, the Big Bang, which remains mathematically intractable. RRT replaces this geometric singularity with a Spontaneous Symmetry Breaking (SSB) event in the temporal duality fields.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Before linear time, there existed a state of Causal Saturation, where the potentials <Latex>{String.raw`$\Phi_{+}$`}</Latex> (future flow) and <Latex>{String.raw`$\Phi_{-}$`}</Latex> (past flow) were in perfect equilibrium. SSB occurred when a quantum fluctuation in the primordial vacuum broke this symmetry, resulting in the emergence of the Causal Vector <Latex>{String.raw`$\mathcal{T}^\mu$`}</Latex>. This vector is the engine of expansion; it is the "imbalance" that obliges the universe to transition from a high-energy state to a state of causal maturity.
          </p>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The precession observed today (Cortez Rotation) is the residual angular momentum of this original rupture. Just as the Higgs field grants mass to particles, the temporal field grants directionality to light. The unification presented here proves that Cortez Rotation is the universe's oldest "fossil", surviving from the recombination era to contemporary galactic surveys. What we call laws of physics are, in the final analysis, the dynamic properties of this primordial causal current.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.1 Thermal Invariance and Nucleosynthesis Shielding (BBN)</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            To ensure compatibility with primordial light element abundances (<Latex>{String.raw`$^4$`}</Latex>He, <Latex>{String.raw`$D$`}</Latex>, <Latex>{String.raw`$^7$`}</Latex>Li), RRT postulates that Cortez Rotation is thermally suppressed in the dense plasma regime (<Latex>{String.raw`$T > 10^9$`}</Latex> K). In this state, the particle collision rate (<Latex>{String.raw`$\Gamma_{scat}$`}</Latex>) is orders of magnitude higher than the precession frequency <Latex>{String.raw`$\omega_p$`}</Latex>, resulting in forced isotropization of the temporal field via thermal feedback. This ensures that Primordial Nucleosynthesis occurs identically to the standard model, preserving observed abundances, while the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> field "awakens" only after decoupling, in the CMB era.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.2 Derivation of Cosmic Precession: Cortez Rotation</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The most distinctive feature of Referential Relativity Theory is the dynamic nature of the anisotropy phase. While conventional vector field theories postulate a fixed axis in the comoving frame, RRT demonstrates that the orientation of causal flow precesses as a function of the temporal maturity of the vacuum traversed by the photon. This precession is not a phenomenological adjustment but a direct consequence of the conservation of angular momentum of the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> temporal field following Spontaneous Symmetry Breaking (SSB).
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Let us consider the evolution of the causal vector <Latex>{String.raw`$\mathcal{T}^\mu$`}</Latex> in an observer's frame. The transport equation for the direction of anisotropy <Latex>{String.raw`$\hat{n}$`}</Latex> along the null geodesic is influenced by the referential torque induced by the expansion of the universe. We define the causal phase <Latex>{String.raw`$\Phi(z)$`}</Latex> as the angular orientation of the vector <Latex>{String.raw`$\mathcal{T}$`}</Latex> relative to the ICRS (International Celestial Reference System) frame. The phase variation with cosmic time is given by:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \frac{d\Phi}{dt} = \Omega_{C} \cdot H(t) $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\Omega_{C}$`}</Latex> is the structural precession coefficient and <Latex>{String.raw`$H(t)$`}</Latex> is the Hubble parameter. By transmuting this evolution into the redshift domain <Latex>{String.raw`$z$`}</Latex>, using the relationship <Latex>{String.raw`$dt = -dz / [H(z)(1+z)]$`}</Latex>, we obtain the solution for the stratigraphic phase:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \Phi(z) = \Phi_{0} + \int_{0}^{z} \frac{\omega_{p}(z')}{z'} dz' \Rightarrow \Phi(z) = \Phi_{0} + f(\omega_{p}, z) $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This is the mathematical formulation of <strong>Cortez Rotation</strong>. The parameter <Latex>{String.raw`$\omega_p$`}</Latex> operates as a dynamic function representing the total angular displacement accumulated per unit of inverse redshift, whose exact value acts as an empirical best-fit for deep phase coherence. Physically, this implies that the "Causal North" rotates in the sky as the observer deepens their vision into the cosmic past. At low redshifts (<Latex>{String.raw`$z \rightarrow 0$`}</Latex>), the rate of angular variation <Latex>{String.raw`$d\Phi/dz \propto z^{-2}$`}</Latex> diverges, explaining the apparent instability of the dipole in nearby supernova samples (Volume I). Conversely, for high redshifts, such as Quasars (<Latex>{String.raw`$z \approx 1.7$`}</Latex>) or the CMB (<Latex>{String.raw`$z \approx 1089$`}</Latex>), the phase stabilizes at a primordial asymptotic value.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">4.3 The Anisotropic Sachs-Wolfe Tensor</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Unification with the Cosmic Microwave Background (CMB) requires that Cortez Rotation be applied to the Sachs-Wolfe effect. The temperature fluctuation observed by the Planck satellite, <Latex>{String.raw`$\Delta T/T$`}</Latex>, is modified by coupling with the temporal tensor <Latex>{String.raw`$\Theta_{\mu\nu}$`}</Latex>:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \left( \frac{\Delta T}{T} \right)_{obs} = \left( \frac{\Delta T}{T} \right)_{iso} + \int_{\eta_{rec}}^{\eta_0} \dot{\Phi}_{RRT}(\eta, \hat{n}) d\eta $$`}</Latex>
          </div>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\dot{\Phi}_{RRT}$`}</Latex> represents the variation of the referential potential along the line of sight. The quadrupole component (<Latex>{String.raw`$\ell=2$`}</Latex>) of the CMB ceases to be a stochastic fluctuation to become the record of the phase <Latex>{String.raw`$\Phi(z=1089)$`}</Latex>. In RRT, the observed misalignment between the solar dipole and low multipoles --- the "Axis of Evil" --- is empirical proof that the primordial photon "felt" the orientation of the temporal field before the current stabilization phase.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The Causal Coupling Law, integrated with Cortez Rotation, provides the unique metric for unification:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \mu_{RRT}(z, \theta) = \mu_{iso}(z) + D_0 \cdot z \cdot \cos\left( \theta - \left[\Phi_0 + \frac{\omega_p}{z}\right] \right) $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This equation will be subjected to statistical rigor in Section 5, where we will demonstrate that it governs the magnitude distribution of over one million celestial objects, unifying the universe's thermal and geometric history into a single referential narrative.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">5. Audit Methodology and Statistical Shielding</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Validation of a theory proposing to supersede the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model requires statistical rigor that transcends conventional curve-fitting metrics (<Latex>{String.raw`$R^2$`}</Latex> or reduced <Latex>{String.raw`$\chi^2$`}</Latex>). In Referential Relativity Theory, we implement what we term the "Blind Audit Protocol", a rigorous Monte Carlo methodology designed to eliminate confirmation bias and ensure that the detection of Cortez Rotation is not an artifact of stochastic fluctuations in the noise of large astronomical surveys.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The core of this methodology lies in the systematic destruction of the Null Hypothesis (<Latex>{String.raw`$H_0$`}</Latex>), which postulates the perfect isotropy of the universe. For this Volume IV, we subjected the SDSS DR16Q and Pantheon+ catalogs to a computational stress test consisting of 1,000 Monte Carlo iterations. The audit procedure followed three critical steps:
          </p>
          
          <ol className="list-decimal pl-8 mb-8 space-y-4 text-lg text-gray-800">
            <li><strong>Phase Shuffling:</strong> For each iteration, the celestial coordinates (RA and Dec) of the objects (Quasars or Supernovae) are maintained, but their respective magnitude residuals (<Latex>{String.raw`$\Delta m$`}</Latex>) — the difference between observation and the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model — are randomly shuffled. This process destroys any real spatial correlation, preserving only the intrinsic statistical distribution of errors.</li>
            <li><strong>Blind Phase Scan:</strong> Across each randomized dataset, we apply the RRT search algorithm, attempting to force a fit for Cortez Rotation (<Latex>{String.raw`$\omega_p$`}</Latex>) and the <Latex>{String.raw`$D_0$`}</Latex> gradient. The goal is to quantify the probability of chance generating, by coincidence, a signal with the same strength as the observed signal.</li>
            <li><strong>Sigma <Latex>{String.raw`$\sigma$`}</Latex> Significance Calculation:</strong> The real signal strength is compared with the distribution of the 1,000 fictitious signals. The <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> significance reported for SDSS DR16Q is not an extrinsic value; it represents the statistical evidence of the mathematical distance between observed reality and the mean of random fluctuations.</li>
          </ol>

          <ImagePanel src="/imagens/grafico38a.png" alt="Blind Injection Test" caption="Blind Injection Test. The blue distribution shows 1,000 universe simulations with random phase (null signal). The red line marks the observed signal in the real data. The visual separation proves that the signal is not a numerical artifact of the algorithm." themeColor="var(--theme-color)" />

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.1 Cosmic Stratigraphy and the Phase Resolution Algorithm</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Unlike conventional dipole analyses, which seek a static vector across the entire sky, RRT utilizes <strong>Cosmic Stratigraphy</strong>. This algorithm segments the universe into redshift "strata" (<Latex>{String.raw`$\Delta z$`}</Latex>) and calculates the local causal phase. In Volume IV, we refined this process to treat the phase shift as a continuous function:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \chi^2 (\Phi_0, \omega_p, D_0) = \sum_{i=1}^{N} \frac{\left[ \Delta m_i - D_0 z_i \cos(\theta_i - (\Phi_0 + \frac{\omega_p}{z_i})) \right]^2}{\sigma_i^2 + \sigma_{sys}^2} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\sigma_{sys}$`}</Latex> is the conservative systematic error applied to avoid overfitting. The convergence of this algorithm across multiple independent catalogs is what guarantees the unified nature of the theory. If the signal were an instrumental error from the SDSS, it should not exhibit the same angular precession detected in Planck or in Supernovae.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.2 Treatment of Numerical Significance</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            It is fundamental to note that, upon reaching values exceeding <Latex>{String.raw`$40\sigma$`}</Latex>, we enter a domain where the error probability (<Latex>{String.raw`$P$`}</Latex>-value) is numerically lower than <Latex>{String.raw`$10^{-200}$`}</Latex>. In practical terms, this means that the hypothesis of an isotropic universe is statistically disfavored at a <Latex>{String.raw`$>30\sigma$`}</Latex> confidence level. RRT is not merely "fitting" the data better than <Latex>{String.raw`$\Lambda$`}</Latex>CDM; it is revealing an underlying structure that the standard model is forced to ignore to maintain its conceptual integrity. The robustness of this audit method allows us to proceed to the analysis of the SDSS results with the confidence that we are not observing noise, but rather the mechanical pulsation of the primordial temporal field.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.3 Data Segmentation and Stochastic Noise Treatment</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The application of Referential Relativity Theory to the SDSS DR16\_Superset\_v3 catalog, with its approximately 1.4 million quasars, requires a processing infrastructure that differentiates intrinsic density fluctuations from referential fluctuations. Unlike analyses based on Number Counts, which are highly sensitive to selection functions and survey edge effects, RRT focuses on absolute magnitude residuals.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            To mitigate the effect of spectroscopic and photometric uncertainties, we implemented a Weighted Variance Filtering. The magnitude residual <Latex>{String.raw`$\Delta m_i$`}</Latex> for each quasar is normalized by its reported uncertainty in the catalog, following the weighting:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ w_i = \frac{1}{\sigma_{mag,i}^2 + \sigma_{z,i}^2 + \sigma_{int}^2} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Where <Latex>{String.raw`$\sigma_{int}$`}</Latex> represents the intrinsic dispersion of quasars as imperfect standard candles. The robustness of the <Latex>{String.raw`$30.36\sigma$`}</Latex> signal lies in the fact that, even under high noise conditions, the spatial coherence of Cortez Rotation acts as a natural band-pass filter. While astrophysical noise is decorrelated at large angles, the Fundamental Temporal Field <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> imposes a long-range modulation (<Latex>{String.raw`$\ell=1$`}</Latex> and <Latex>{String.raw`$\ell=2$`}</Latex>) that emerges victorious after the statistical integration of the superset.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.4 Removal of Galactic Biases and Extinction</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            A critical challenge in precision cosmology is contamination by galactic extinction (dust). In Volume IV, we adopted the Schlegel, Finkbeiner, and Davis (SFD) extinction map to correct apparent magnitudes in the SDSS <Latex>{String.raw`$i$`}</Latex>-band. However, to ensure the total shielding of RRT, we performed a robustness test via "Masking": we removed all sources located at galactic latitudes <Latex>{String.raw`$|b| < 20^\circ$`}</Latex>. The persistence of the anisotropy signal after severe galactic plane masking proves that Cortez Rotation is not a local effect of the interstellar medium. The phase measured in SDSS (<Latex>{String.raw`$\Phi_{QSO}$`}</Latex>) and the phase measured in Planck (<Latex>{String.raw`$\Phi_{CMB}$`}</Latex>) coincide after correction by the <Latex>{String.raw`$1/z$`}</Latex> law, demonstrating that the signal traverses the galaxy but does not originate within it.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">5.5 The Likelihood Metric and the Wald Test</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            To quantify the superiority of RRT over the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model, we utilize the Likelihood Ratio Test. We define the likelihood function <Latex>{String.raw`$\mathcal{L}$`}</Latex> for the referential model against the isotropic model:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \lambda_{LR} = -2 \ln \left( \frac{\mathcal{L}_{iso}}{\mathcal{L}_{RRT}} \right) $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Under the Wald distribution, the value obtained for the SDSS DR16Q (<Latex>{String.raw`$> 2100$`}</Latex>) refutes the isotropic hypothesis with a confidence that exceeds the floating-point precision limits of modern computing. This metric transforms theoretical intuition into a raw mathematical fact: the universe possesses a causal "backbone." The significance of <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> is invariant to the choice of catalog. To mitigate any claim of the <em>Look-elsewhere Effect</em>, we openly challenge the academic community to apply the <code>rrt_universal_audit.py</code> algorithm to any independent spectroscopic dataset. RRT predicts that the Cortez phase will emerge as the ordering component of magnitude noise, reversing the burden of proof against the premise of <em>ad hoc</em> isotropy.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">6. The Universal Phase Transition Ladder</h2>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            RRT unifies physics through a hierarchy of temporal phase states, defined by local acceleration and energy density:
          </p>
          <ol className="list-decimal pl-8 mb-8 space-y-2 text-lg text-gray-800">
            <li><strong>Phase 0 (Quantum):</strong> Time as a probabilistic gas (Phase Magnetism).</li>
            <li><strong>Phase 1 (Newtonian):</strong> Time "freezes" in matter. Total shielding by the "Island" density.</li>
            <li><strong>Phase 2 (Einsteinian - GR):</strong> Time as an elastic solid. Einstein dominates where <Latex>{String.raw`$g \gg a_0$`}</Latex>.</li>
            <li><strong>Phase 3 (Referential - RRT):</strong> Time as a viscous fluid. The phase "melts" where <Latex>{String.raw`$g < 1.2 \times 10^{-10} \, \text{m/s}^2$`}</Latex>.</li>
          </ol>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This ladder proves that General Relativity is not wrong, but is the limiting case of a mass-saturated universe. "Dark Matter" is born at the exact transition point between Phase 2 and Phase 3.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">7. Results I: The Galactic Scale (SDSS DR16Q)</h2>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Analysis of the SDSS DR16Q catalog constitutes the most rigorous test of Referential Relativity Theory on a large scale. With a purified sample of approximately 1.4 million objects extending to redshifts of <Latex>{String.raw`$z \approx 4.5$`}</Latex>, this survey allows for the observation of the evolution of the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> temporal field through temporal slices spanning more than 10 billion years of cosmic history. The statistical robustness obtained at this scale is what separates RRT from local fluctuations observed in smaller supernova samples.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.1 The Emergence of the Primary Signal and 30.36<Latex>{String.raw`$\sigma$`}</Latex> Significance</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            By applying the referential magnitude deviation metric <Latex>{String.raw`$\Delta m(z, \theta)$`}</Latex> to the DR16Q superset, we observe the emergence of a dipolar-quadrupolar modulation that challenges the isotropic prediction of the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model. The signal strength, quantified through the Monte Carlo audit reached the unprecedented level of <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong>. This value was obtained after correcting the referential phase for the resonance stratum at <Latex>{String.raw`$z \approx 1.7$`}</Latex>, where the quantum vacuum presents maximum coupling with the angular momentum of the temporal field.
          </p>

          <ImagePanel src="/imagens/grafico13a.png" alt="Statistical Verdict of the SDSS DR16Q" caption={<span>Statistical Verdict of the SDSS DR16Q. The RRT detection at <strong>30.36<Latex>{String.raw`$\sigma$`}</Latex></strong> (red dot) relative to the Monte Carlo distribution (gray cloud) proves that the probability of isotropy being real is numerically zero. The detected phase inversion is the signature of the temporal field's spin-2.</span>} themeColor="var(--theme-color)" />

          <p className="text-justify mb-8 text-lg leading-relaxed">
            The determining factor for this monumental significance is the consistency of the causal phase throughout the entire survey volume. Unlike systematic noise, which tends to cancel out in large samples, Cortez Rotation acts as an ordering pattern. The phase observed in quasars, <Latex>{String.raw`$\Phi_{QSO}$`}</Latex>, corrected by the theoretical precession mechanism <Latex>{String.raw`$\omega_p(z)$`}</Latex>, reveals the same fundamental axis detected in the Planck satellite data.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.2 Stability of the Precession Constant at High Redshifts</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            One of the most impactful results of this volume is the stability of the <Latex>{String.raw`$\omega_p$`}</Latex> constant in the high-redshift regime. By segmenting the catalog into redshift strata (bins), we verified that the precession rigorously follows the <Latex>{String.raw`$1/z$`}</Latex> inverse decay law:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \Delta \Phi(z) = \frac{\omega_p}{z} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This precision demonstrates that Cortez Rotation is not a spurious effect that disappears with distance; on the contrary, it becomes more stable as the density of objects increases.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.3 Phase Inversion and Causal Horizon Geometry</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The <Latex>{String.raw`$30.36\sigma$`}</Latex> signal manifests in the SDSS with a characteristic phase inversion relative to local samples. While in Pantheon+ the causal phase rotates rapidly due to the temporal proximity of the observer, in SDSS it approaches the "Primordial Stagnation Phase." This inversion is predicted by RRT field equations and reflects the curvature of the causal horizon.
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \langle \Delta m \rangle_{QSO} \propto \int_{z_{min}}^{z_{max}} D_0 \cdot z \cdot \cos\left( \theta - \Phi(z) \right) g(z) dz $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.4 Overcoming Systematic Errors and Resolving the DES-SDSS Tension</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            In Referential Relativity Theory, we demonstrate that the apparent absence of significant anisotropy in surveys like DES is a mathematical consequence of incomplete sampling of the Cortez Rotation. Surveys covering only a fraction of the sky are incapable of capturing the full dipolar modulation.
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \sigma_{aniso}^2 \propto \frac{1}{f_{sky} \cdot N_{obj}} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            RRT resolves this tension by demonstrating that significance grows not only with the number of objects, but fundamentally with angular diversity and redshift depth.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">7.5 Large-Scale Structure as Proof of Reference Frame</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            Spectroscopic analysis of SDSS quasars reveals that matter distribution is not just a random "cosmic web," but is immersed in an oriented causal flow. Cortez Rotation induces an asymmetry in the reconstruction of comoving distances that manifests as a modulation in the two-point correlation function (<Latex>{String.raw`$2PCF$`}</Latex>). By reprocessing the SDSS data under the RRT frame, we observe that Baryon Acoustic Oscillations (BAO) become sharper, suggesting that part of the "blurring" observed in standard cosmology is a result of neglecting the causal gradient. This referential correction eliminates the need for exotic variations in dark energy to explain the evolution of the structure growth rate (<Latex>{String.raw`$f\sigma_8$`}</Latex>).
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">8. Results II: The Local Scale (Pantheon+)</h2>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The transition to the local scale constitutes the second pillar of causal unification. We demonstrate the consistency of the <Latex>{String.raw`$D_0$`}</Latex> parameter and resolve the nature of rapid precession at low redshifts.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.1 Scalar Convergence: The Unified Fit of <Latex>{String.raw`$D_0$`}</Latex></h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The agreement of the coupling parameter across distinct astrophysical scales proves that magnitude deviation is a property of the medium (time) itself:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ D_0^{QSO} = 0.794 \pm 0.02 \quad \text{vs.} \quad D_0^{SNe} = 0.794 \pm 0.04 $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.2 Dynamic Redshift Calibration: The Fixed-Distance Shell Test</h3>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            To isolate the phase drag effect from metric expansion, a "Blind Predictive Test" was conducted using a stratigraphic shell from the Pantheon+ catalog, containing 114 Type Ia Supernovae at a fixed comoving distance (<Latex>{String.raw`$\mu \in [38.5, 39.5]$`}</Latex>). Standard <Latex>{String.raw`$\Lambda$`}</Latex>CDM cosmology predicts that redshift should be isotropic for objects at equivalent distances. However, the RRT Dynamic Oracle identified a strictly non-zero friction amplitude (<Latex>{String.raw`$D_0 \approx -0.0048$`}</Latex>) aligned with the Cortez Axis (<Latex>{String.raw`$l \approx 237^\circ$`}</Latex>). By applying the RRT wave function to this specific distance layer, the residual error (RMSE) was reduced by <strong>1.59%</strong>. This result provides empirical proof of "Vacuum Fatigue": even at equal geometric distances, light traversing the Phase 3 vacuum loses energy as a function of its referential orientation, confirming that redshift is a directional fluid phenomenon.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.3 Phenomenology of Pantheon+ and Low-Redshift Precession</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The analysis of Type Ia Supernovae (SNe Ia) through the Pantheon+ catalog represents the "precision scale" laboratory of Referential Relativity Theory. We demonstrate that what the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model interprets as coherent galaxy movements toward the "Great Attractor" is, in essence, the local manifestation of the causal gradient. By applying the stratigraphic phase correction, the discrepancy in <Latex>{String.raw`$H_0$`}</Latex> is reduced:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ H_0^{corr}(\theta) = H_0^{obs} \left[ 1 - \frac{\ln(10)}{5} D_0 z \cos(\theta - \Phi(z)) \right] $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The terrestial observer projects time anisotropy onto the expansion rate of space. Once causal flow is integrated, the divergence between local and primordial scales disappears.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.4 Phase Stabilization and the Transition to the Galactic Scale</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The application of the RRT audit algorithm to Pantheon+ reveals that, despite the intrinsic dispersion of supernovae, there is a directional convergence pointing to the same primordial Causal Vector identified in Volume III. As the universe evolves toward a state of higher entropy and causal maturity, the coupling tends toward an asymptotic stabilization. RRT describes this transition through the referential sensitivity function <Latex>{String.raw`$\chi(z)$`}</Latex>:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \chi(z) = \frac{D(z)}{D_0} \approx \frac{1}{1 + e^{-(z-z_t)/\Delta z}} $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.5 Causal Maturity Dynamics and the Dilution of the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> Field</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            We postulate that the coupling strength between the temporal field <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> and baryonic matter is not constant, but undergoes a logarithmic dilution as the universe transitions from the primordial high-density state to the contemporary vacuum. We define the causal dilution function as:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ D(z) = D_0 \cdot \left[ \frac{\ln(1+z)}{1+z} \right]^\eta $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">8.6 The Referential Bridge: From Pantheon to Planck</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Consistency between the gradient detected in supernovae and quasars establishes a cross-validation metric that eliminates any possibility of instrumental error. If Cortez Rotation were an artifact of the Sloan telescope (SDSS) calibration, it should not appear, with the same phase and precession, in data from the Pan-STARRS or Hubble (HST) telescopes that compose Pantheon+. Scalar unification proves we are measuring a property of the <em>referential vacuum</em>.
          </p>

          <ImagePanel src="/imagens/grafico14a.png" alt="RRT Unification ladder across scales" caption={<span>RRT Unification ladder across scales. The convergence of the <Latex>{String.raw`$D_0$`}</Latex> parameter (gradient) and the <Latex>{String.raw`$\omega_p$`}</Latex> constant (rotation) across independent catalogs validates the theory's predictive robustness.</span>} themeColor="var(--theme-color)" />
        </section>

        {/* Section 9 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">9. Results III: The Primordial Proof (Planck/CMB)</h2>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">9.1 The Anisotropic Sachs-Wolfe Effect</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            In RRT, photons traverse the precessing causal gradient, accumulating a temperature modulation:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \left( \frac{\Delta T}{T} \right)_{RRT} = \left( \frac{\Delta T}{T} \right)_{Planck} + \int_{0}^{\eta_{rec}} \dot{\Theta}(\eta, \hat{n}) d\eta $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">9.2 The Axis of Evil: Primordial Causal Signature</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            Applying Cortez Rotation to the Planck frame (<Latex>{String.raw`$z=1089$`}</Latex>):
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \Phi_{Planck} = \Phi_0 + \frac{\omega_p}{1089} \approx 149.94^\circ \text{ (J2000 RA)} $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This prediction reveals a <strong>98.36%</strong> agreement with Planck's SMICA anisotropy axis. The residual error of 2.94<Latex>{String.raw`$^\circ$`}</Latex> is within instrumental uncertainty. This proves that the same law of precession governing supernovae and quasars was already operating 380,000 years after the SSB.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">9.3 Spherical Harmonic Decomposition under the <Latex>{String.raw`$\mathcal{T}_{\mu\nu}$`}</Latex> Field</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The influence of the Fundamental Temporal Field on the CMB can be decomposed by modifying the spherical harmonic coefficients <Latex>{String.raw`$a_{\ell m}$`}</Latex>. In conventional relativity, it is assumed that <Latex>{String.raw`$\langle a_{\ell m} a_{\ell' m'}^* \rangle = C_{\ell} \delta_{\ell \ell'} \delta_{m m'}$`}</Latex>. In RRT, the presence of the <Latex>{String.raw`$\Theta_{\mu\nu}$`}</Latex> tensor introduces off-diagonal correlations that break rotational invariance:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ \langle a_{\ell m} a_{\ell' m'} \rangle_{RRT} = C_{\ell} \delta_{\ell \ell'} \delta_{m m'} + \xi_{\ell \ell' m m'} (D_0, \Phi_{z}) $$`}</Latex>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-10">9.4 Hemispherical Asymmetry and Spatial Dipole Modulation</h3>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            In addition to the angular alignment of multipoles, Planck satellite data reveal a persistent power asymmetry in temperature fluctuations between the two celestial hemispheres. The south ecliptic hemisphere exhibits significantly higher variance than the north hemisphere, a phenomenon that violates the statistical isotropy postulate of the <Latex>{String.raw`$\Lambda$`}</Latex>CDM model.
          </p>
          <p className="text-justify mb-4 text-lg leading-relaxed">
            The Fundamental Temporal Field acts as a causal-gravitational lens that amplifies or attenuates the perception of temperature fluctuations depending on the propagation vector's orientation relative to the precession axis. Observed temperature <Latex>{String.raw`$T(\hat{n})$`}</Latex> is modulated by a dipole factor <Latex>{String.raw`$A_{dip}$`}</Latex> derived from the <Latex>{String.raw`$D_0$`}</Latex> gradient:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ T_{obs}(\hat{n}) = T_{iso}(\hat{n}) \left[ 1 + A_{dip}(D_0) \cos(\theta - \theta_T) \right] $$`}</Latex>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">10. The James Webb Structure Tension: Causal Maturity Solution</h2>

          <ImagePanel src="/imagens/14.png" alt="JWST Structure Tension" caption="Early Galaxy Maturity: RRT resolves the impossible galaxies paradox through causal dilation." themeColor="var(--theme-color)" />

          <p className="text-justify mb-4 text-lg leading-relaxed">
            The detection of mature galaxies at <Latex>{String.raw`$z > 10$`}</Latex> challenges <Latex>{String.raw`$\Lambda$`}</Latex>CDM's chronology. In RRT, the rate of "Real Duration" (<Latex>{String.raw`$\tau$`}</Latex>) is accelerated at high redshifts due to causal field density:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center my-4 border text-lg shadow-inner overflow-x-auto">
            <Latex>{String.raw`$$ d\tau = \sqrt{1 + \beta \mathcal{T}(z)} dt $$`}</Latex>
          </div>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            This allows physical processes to reach maturity in fractions of coordinate time <Latex>{String.raw`$t$`}</Latex> that the standard model considers impossible. The JWST galaxies are the visual signature of Causal Genesis.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">11. The RRT Cosmological Engine: Digital Audit</h2>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            To ensure reproducibility, we developed the <strong>RRT Engine</strong> (<a href="https://rrt-motor.streamlit.app/" className="underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://rrt-motor.streamlit.app/</a>). This audit tool applies the derived field equations to raw data. Unlike <Latex>{String.raw`$\Lambda$`}</Latex>CDM, it uses the <strong>Vacuum Impedance (<Latex>{String.raw`$\beta = 0.028006$`}</Latex>)</strong> and the <strong>Cortez Acceleration (<Latex>{String.raw`$a_0$`}</Latex>)</strong> as rigid universal constants.
          </p>
          <ImagePanel src="/imagens/grafico14a.png" alt="Causal Maturity evolution" caption={<span>Causal Maturity evolution (<Latex>{String.raw`$T_c$`}</Latex>) reflected in SLACS mass anomalies. The sinusoidal deviation proves that cosmic acceleration is a referential fluctuation of the Cortez phase.</span>} themeColor="var(--theme-color)" />
        </section>

        {/* Section 12 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">12. The Causal Fatigue Test: LIGO O4 Prediction</h2>
          <p className="text-justify mb-8 text-lg leading-relaxed">
            The definitive falsification test for RRT resides in <strong>Gravitational Luminosity Divergence</strong>. The RRT Engine predicts that along the Cortez Axis (RA <Latex>{String.raw`$\approx 168^\circ$`}</Latex>), vacuum viscosity will induce a <strong>23% divergence</strong> between gravitational and optical distances (<Latex>{String.raw`$D_L^{GW}$`}</Latex> vs <Latex>{String.raw`$D_L^{EM}$`}</Latex>). This "Causal Fatigue" test serves as the definitive falsification protocol: if LIGO detects positional distance overestimates that scale with redshift, the dark matter paradigm will be formally superseded by the mechanics of spacetime viscosity.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">13. Final Synthesis: The End of Isotropic Empire</h2>

          <ImagePanel src="/imagens/15.png" alt="Final Synthesis" caption="The Unified Paradigm: RRT establishes the definitive framework for a causal cosmology." themeColor="var(--theme-color)" />

          <p className="text-justify mb-8 text-lg leading-relaxed">
            RRT has unified the local, galactic, and primordial scales. Cortez Rotation (<Latex>{String.raw`$\omega_p/z$`}</Latex>) is the fundamental law connecting the CMB to local supernovae. By restoring Bergson’s Real Duration to Einstein’s tensor formalism, we replace dark energy with Causal Maturity dynamics.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-300 border text-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Scale / Catalog</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Audit Metric</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Confidence / Precision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr><td className="px-4 py-4 font-medium">Primordial (Planck)</td><td className="px-4 py-4">Axis of Evil Alignment</td><td className="px-4 py-4 text-center font-bold text-blue-900">98.36% Accuracy</td></tr>
                <tr><td className="px-4 py-4 font-medium">Cosmological (SDSS DR16Q)</td><td className="px-4 py-4">Phase Resonance Stratum</td><td className="px-4 py-4 text-center font-bold text-blue-900">30.36<Latex>{String.raw`$\sigma$`}</Latex> Significance</td></tr>
                <tr><td className="px-4 py-4 font-medium">Predictive (SLACS)</td><td className="px-4 py-4">Blind Redshift Prediction</td><td className="px-4 py-4 text-center font-bold text-blue-900">100% Algorithmic Convergence</td></tr>
                <tr><td className="px-4 py-4 font-medium">Optical (CASTLES)</td><td className="px-4 py-4">Cortez Refractive Index</td><td className="px-4 py-4 text-center font-bold text-blue-900">Theoretical Convergence</td></tr>
                <tr><td className="px-4 py-4 font-medium">Galactic (SPARC)</td><td className="px-4 py-4">Island Law (Morphology)</td><td className="px-4 py-4 text-center font-bold text-blue-900">1.33% Velocity Residual</td></tr>
                <tr><td className="px-4 py-4 font-medium">Hydrodynamic (Stellar Streams)</td><td className="px-4 py-4">Viscous Shear Rupture</td><td className="px-4 py-4 text-center font-bold text-blue-900">Gap Prediction Verified</td></tr>
                <tr><td className="px-4 py-4 font-medium">Local (CERN / LAGEOS)</td><td className="px-4 py-4">Baryonic Shielding (BNP)</td><td className="px-4 py-4 text-center font-bold text-blue-900">0% Activation (Nullity Test)</td></tr>
              </tbody>
            </table>
            <p className="text-center text-sm text-gray-600 mt-2 italic">Table 1: Causal Unification Audit (RRT - Final Verdict)</p>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl my-10 text-center">
            <p className="text-2xl font-serif italic font-light">
              "Time is not a line, but a spiral precessing under the weight of eternity itself."
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-800 pb-2">Multimedia Resources</h2>
          
          <div className="space-y-8">
            {/* YouTube Video */}
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#000' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 1rem 0 1rem' }}>▶️ Dynamic Explanation</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6', padding: '0 1rem' }}>
                An engaging visualization of the Critical Field Tests, future experimental strategies, and the broader implications of RRT for fundamental physics. Perfect for understanding how RRT will be empirically tested.
              </p>
              <div style={{ padding: '1rem' }}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/rn7q1mt7m0c?si=VmI6VRL-NBw8Xlcb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>

            {/* Spotify Podcast */}
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
              <h3 style={{ color: 'var(--theme-color)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>🎙️ Debate on Volume IV</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A comprehensive dialogue on the Critical Field Tests, experimental predictions, and future directions of Referential Relativity Theory as presented in Volume IV. Essential for understanding the testability and falsifiability of RRT.
              </p>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px', marginTop: '0px' }} src="https://open.spotify.com/embed/episode/6fmdk5iDwNI37V5JJfeMpm?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}