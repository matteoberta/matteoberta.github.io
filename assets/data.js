window.RESEARCH = {
  "name": "Matteo Berta",
  "subtitle": "PhD student \u00b7 Artificial intelligence",
  "affiliation": "Liris, Université Claude Bernard Lyon 1, Politecnico di Torino",
  "email": "matteo.berta@polito.it, matteo.berta@liris.cnrs.fr",
  "github": "https://github.com/matteoberta",
  "scholar": "https://scholar.google.com/citations?user=b2halSQAAAAJ&hl=en",
  "findings": [],
  "projects": [],
  "venues": [],
  "references": [
    {
      "id": "bourtoule2021",
      "title": "Machine Unlearning",
      "authors": "Bourtoule et al.",
      "venue": "2021 IEEE Symposium on Security and Privacy",
      "year": 2021,
      "url": "https://doi.org/10.1109/SP40001.2021.00019",
      "bib": "@inproceedings{bourtoule2021machine,\n  title={Machine Unlearning},\n  author={Bourtoule, Lucas and Chandrasekaran, Varun and Choquette-Choo, Christopher A. and Jia, Hengrui and Travers, Adelin and Zhang, Baiwu and Lie, David and Papernot, Nicolas},\n  booktitle={2021 IEEE Symposium on Security and Privacy (SP)},\n  pages={141--159},\n  year={2021},\n  doi={10.1109/SP40001.2021.00019}\n}"
    },
    {
      "id": "guo2020",
      "title": "Certified Data Removal from Machine Learning Models",
      "authors": "Guo et al.",
      "venue": "Proceedings of the 37th International Conference on Machine Learning",
      "year": 2020,
      "url": "https://proceedings.mlr.press/v119/guo20c.html",
      "bib": "@inproceedings{guo2020certified,\n  title={Certified Data Removal from Machine Learning Models},\n  author={Guo, Chuan and Goldstein, Tom and Hannun, Awni and van der Maaten, Laurens},\n  booktitle={Proceedings of the 37th International Conference on Machine Learning},\n  pages={3832--3842},\n  year={2020},\n  publisher={PMLR}\n}"
    },
    {
      "id": "lorenz1963",
      "title": "Deterministic Nonperiodic Flow",
      "authors": "Lorenz",
      "venue": "Journal of the Atmospheric Sciences",
      "year": 1963,
      "url": "https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2",
      "bib": "@article{lorenz1963deterministic,\n  title={Deterministic Nonperiodic Flow},\n  author={Lorenz, Edward N.},\n  journal={Journal of the Atmospheric Sciences},\n  volume={20},\n  number={2},\n  pages={130--141},\n  year={1963},\n  doi={10.1175/1520-0469(1963)020<0130:DNF>2.0.CO;2}\n}"
    },
    {
      "id": "ott2002",
      "title": "Chaos in Dynamical Systems",
      "authors": "Ott",
      "venue": "Cambridge University Press",
      "year": 2002,
      "url": "https://doi.org/10.1017/CBO9780511803260",
      "bib": "@book{ott2002chaos,\n  title={Chaos in Dynamical Systems},\n  author={Ott, Edward},\n  edition={2},\n  publisher={Cambridge University Press},\n  year={2002},\n  doi={10.1017/CBO9780511803260}\n}"
    },
    {
      "id": "strogatz2015",
      "title": "Nonlinear Dynamics and Chaos",
      "authors": "Strogatz",
      "venue": "Westview Press",
      "year": 2015,
      "url": "https://www.routledge.com/Nonlinear-Dynamics-and-Chaos-With-Applications-to-Physics-Biology-Chemistry-and-Engineering/Strogatz/p/book/9780813349107",
      "bib": "@book{strogatz2015nonlinear,\n  title={Nonlinear Dynamics and Chaos: With Applications to Physics, Biology, Chemistry, and Engineering},\n  author={Strogatz, Steven H.},\n  edition={2},\n  publisher={Westview Press},\n  year={2015},\n  isbn={9780813349107}\n}"
    }
  ],
  "terms": [
    {
      "id": "machine-unlearning",
      "title": "Machine unlearning",
      "domain": "Unlearning",
      "category": "Foundations",
      "definition": "Methods for removing the influence of specified training data from a learned model. The target is usually defined relative to training on the retained data.",
      "refs": [
        "bourtoule2021"
      ],
      "related": [
        "exact-unlearning",
        "approximate-unlearning",
        "retraining"
      ],
      "aliases": "forgetting data removal"
    },
    {
      "id": "exact-unlearning",
      "title": "Exact unlearning",
      "domain": "Unlearning",
      "category": "Guarantees",
      "definition": "An unlearning procedure whose output has the same distribution as the reference training algorithm run on the retained dataset. Equality of one model\u2019s weights is not generally required.",
      "refs": [
        "bourtoule2021"
      ],
      "related": [
        "approximate-unlearning",
        "retraining"
      ],
      "aliases": ""
    },
    {
      "id": "approximate-unlearning",
      "title": "Approximate unlearning",
      "domain": "Unlearning",
      "category": "Guarantees",
      "definition": "An unlearning procedure that aims to approximate the retained-data training distribution or behavior. The chosen distance, tolerance, and assumptions determine what the claim means.",
      "refs": [
        "guo2020"
      ],
      "related": [
        "exact-unlearning",
        "certified-removal"
      ],
      "aliases": ""
    },
    {
      "id": "certified-removal",
      "title": "Certified removal",
      "domain": "Unlearning",
      "category": "Guarantees",
      "definition": "Data removal with a formal bound relating the output distribution to a model trained without the removed data, under stated assumptions. The guarantee is stronger than a drop in accuracy on forgotten samples.",
      "refs": [
        "guo2020"
      ],
      "related": [
        "approximate-unlearning",
        "retraining"
      ],
      "aliases": ""
    },
    {
      "id": "sisa",
      "title": "SISA training",
      "domain": "Unlearning",
      "category": "Methods",
      "definition": "Sharded, Isolated, Sliced, and Aggregated training limits each example\u2019s influence to part of an ensemble, allowing affected components to be retrained after deletion.",
      "refs": [
        "bourtoule2021"
      ],
      "related": [
        "machine-unlearning",
        "retraining"
      ],
      "aliases": "sharding slicing ensemble"
    },
    {
      "id": "retraining",
      "title": "Retraining baseline",
      "domain": "Unlearning",
      "category": "Evaluation",
      "definition": "Run the specified training algorithm again using only retained data. This is a reference for unlearning quality; randomness and computational cost must be accounted for.",
      "refs": [
        "bourtoule2021",
        "guo2020"
      ],
      "related": [
        "exact-unlearning",
        "certified-removal"
      ],
      "aliases": ""
    },
    {
      "id": "chaos",
      "title": "Deterministic chaos",
      "domain": "Chaos",
      "category": "Foundations",
      "definition": "Irregular long-term behavior generated by deterministic dynamics, associated with sensitivity to initial conditions. A noisy or visually complex trace alone does not establish chaos.",
      "refs": [
        "lorenz1963",
        "ott2002"
      ],
      "related": [
        "sensitivity",
        "lyapunov-exponent",
        "strange-attractor"
      ],
      "aliases": "chaotic dynamics deterministic nonperiodic behavior"
    },
    {
      "id": "phase-space",
      "title": "Phase space",
      "domain": "Chaos",
      "category": "Foundations",
      "definition": "The space whose coordinates specify every variable needed to describe a dynamical system's state. Each initial condition is a point, and its evolution traces a trajectory through this space.",
      "refs": [
        "strogatz2015",
        "ott2002"
      ],
      "related": [
        "attractor",
        "poincare-map",
        "bifurcation"
      ],
      "aliases": "state space trajectory orbit"
    },
    {
      "id": "attractor",
      "title": "Attractor",
      "domain": "Chaos",
      "category": "Geometry",
      "definition": "A set in phase space toward which nearby trajectories approach over time. Attractors may be fixed points, periodic orbits, or more complicated sets; an attractor is not necessarily chaotic.",
      "refs": [
        "strogatz2015",
        "ott2002"
      ],
      "related": [
        "phase-space",
        "strange-attractor",
        "bifurcation"
      ],
      "aliases": "attracting set basin of attraction"
    },
    {
      "id": "strange-attractor",
      "title": "Strange attractor",
      "domain": "Chaos",
      "category": "Geometry",
      "definition": "A chaotic attractor with intricate geometric structure, typically associated with stretching, folding, and sensitive dependence on initial conditions. The Lorenz attractor is a canonical example.",
      "refs": [
        "lorenz1963",
        "ott2002"
      ],
      "related": [
        "attractor",
        "sensitivity",
        "lyapunov-exponent"
      ],
      "aliases": "chaotic attractor Lorenz attractor fractal attractor"
    },
    {
      "id": "sensitivity",
      "title": "Sensitivity to initial conditions",
      "domain": "Chaos",
      "category": "Dynamics",
      "definition": "Nearby initial states can separate rapidly under the same deterministic evolution. In chaotic regimes this limits trajectory-level prediction even when the governing equations are known.",
      "refs": [
        "lorenz1963",
        "ott2002"
      ],
      "related": [
        "chaos",
        "lyapunov-exponent",
        "strange-attractor"
      ],
      "aliases": "butterfly effect initial-value sensitivity"
    },
    {
      "id": "lyapunov-exponent",
      "title": "Lyapunov exponent",
      "domain": "Chaos",
      "category": "Measures",
      "definition": "A rate measuring the average exponential growth or decay of an infinitesimal perturbation along a trajectory. A positive maximal Lyapunov exponent is a standard indicator of sensitive dependence and chaos.",
      "refs": [
        "ott2002"
      ],
      "related": [
        "chaos",
        "sensitivity",
        "strange-attractor"
      ],
      "aliases": "Lyapunov characteristic exponent LCE maximal Lyapunov exponent"
    },
    {
      "id": "bifurcation",
      "title": "Bifurcation",
      "domain": "Chaos",
      "category": "Transitions",
      "definition": "A qualitative change in a system's long-term behavior caused by varying a parameter. A bifurcation can create or destroy equilibria, periodic orbits, or other invariant structures.",
      "refs": [
        "strogatz2015"
      ],
      "related": [
        "period-doubling",
        "logistic-map",
        "attractor"
      ],
      "aliases": "qualitative transition critical parameter"
    },
    {
      "id": "period-doubling",
      "title": "Period-doubling route to chaos",
      "domain": "Chaos",
      "category": "Transitions",
      "definition": "A route to chaos in which a stable periodic orbit repeatedly loses stability and is replaced by an orbit with twice its period. The bifurcations accumulate at a finite parameter value.",
      "refs": [
        "strogatz2015",
        "ott2002"
      ],
      "related": [
        "bifurcation",
        "logistic-map",
        "chaos"
      ],
      "aliases": "period doubling cascade Feigenbaum cascade route to chaos"
    },
    {
      "id": "poincare-map",
      "title": "Poincaré map",
      "domain": "Chaos",
      "category": "Analysis",
      "definition": "A discrete map obtained by recording where a continuous trajectory repeatedly intersects a chosen surface. It reduces a flow by one dimension while preserving key stability and recurrence information.",
      "refs": [
        "strogatz2015",
        "ott2002"
      ],
      "related": [
        "phase-space",
        "attractor",
        "bifurcation"
      ],
      "aliases": "Poincare section first-return map return map"
    },
    {
      "id": "logistic-map",
      "title": "Logistic map",
      "domain": "Chaos",
      "category": "Models",
      "definition": "The one-dimensional recurrence xₙ₊₁ = r xₙ(1 − xₙ). As the parameter r changes, it displays fixed points, periodic cycles, period-doubling cascades, chaotic intervals, and periodic windows.",
      "refs": [
        "strogatz2015",
        "ott2002"
      ],
      "related": [
        "period-doubling",
        "bifurcation",
        "chaos"
      ],
      "aliases": "quadratic map discrete dynamical system population map"
    }
  ]
};
