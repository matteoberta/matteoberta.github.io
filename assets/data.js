window.RESEARCH = {
  "name": "Matteo",
  "subtitle": "PhD student \u00b7 Artificial intelligence",
  "affiliation": "Affiliation to be added",
  "email": "",
  "github": "",
  "scholar": "",
  "findings": [],
  "projects": [],
  "venues": [],
  "references": [
    {
      "id": "bourtoule2021",
      "title": "Machine Unlearning",
      "authors": "Bourtoule et al.",
      "venue": "IEEE Symposium on Security and Privacy",
      "year": 2021,
      "url": "https://arxiv.org/abs/1912.03817",
      "bib": "@inproceedings{bourtoule2021, title={Machine Unlearning}, author={Bourtoule, Lucas and Chandrasekaran, Varun and Choquette-Choo, Christopher A. and Jia, Hengrui and Travers, Adelin and Zhang, Baiwu and Lie, David and Papernot, Nicolas}, booktitle={IEEE Symposium on Security and Privacy}, year={2021}}"
    },
    {
      "id": "guo2020",
      "title": "Certified Data Removal from Machine Learning Models",
      "authors": "Guo, Goldstein, Hannun & van der Maaten",
      "venue": "ICML",
      "year": 2020,
      "url": "https://proceedings.mlr.press/v119/guo20c.html",
      "bib": "@inproceedings{guo2020, title={Certified Data Removal from Machine Learning Models}, author={Guo, Chuan and Goldstein, Tom and Hannun, Awni and van der Maaten, Laurens}, booktitle={ICML}, year={2020}}"
    },
    {
      "id": "lorenz1963",
      "title": "Deterministic Nonperiodic Flow",
      "authors": "Edward N. Lorenz",
      "venue": "Journal of the Atmospheric Sciences",
      "year": 1963,
      "url": "https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2",
      "bib": "@article{lorenz1963, title={Deterministic Nonperiodic Flow}, author={Lorenz, Edward N.}, journal={Journal of the Atmospheric Sciences}, volume={20}, pages={130--141}, year={1963}}"
    },
    {
      "id": "sompolinsky1988",
      "title": "Chaos in Random Neural Networks",
      "authors": "Sompolinsky, Crisanti & Sommers",
      "venue": "Physical Review Letters",
      "year": 1988,
      "url": "https://doi.org/10.1103/PhysRevLett.61.259",
      "bib": "@article{sompolinsky1988, title={Chaos in Random Neural Networks}, author={Sompolinsky, H. and Crisanti, A. and Sommers, H. J.}, journal={Physical Review Letters}, volume={61}, pages={259--262}, year={1988}}"
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
        "lorenz1963"
      ],
      "related": [
        "lorenz-attractor",
        "sensitivity",
        "chaotic-rnn"
      ],
      "aliases": ""
    },
    {
      "id": "sensitivity",
      "title": "Sensitivity to initial conditions",
      "domain": "Chaos",
      "category": "Dynamics",
      "definition": "Nearby initial states can separate rapidly under the same deterministic evolution. In chaotic regimes this limits trajectory-level prediction even when the governing equations are known.",
      "refs": [
        "lorenz1963"
      ],
      "related": [
        "chaos",
        "lorenz-attractor"
      ],
      "aliases": ""
    },
    {
      "id": "lorenz-attractor",
      "title": "Lorenz attractor",
      "domain": "Chaos",
      "category": "Models",
      "definition": "The familiar two-lobed attractor of the Lorenz system in a chaotic parameter regime. It illustrates how simple nonlinear differential equations can generate aperiodic trajectories.",
      "refs": [
        "lorenz1963"
      ],
      "related": [
        "chaos",
        "sensitivity"
      ],
      "aliases": "butterfly lorenz system"
    },
    {
      "id": "chaotic-rnn",
      "title": "Chaotic recurrent networks",
      "domain": "Chaos",
      "category": "Neural dynamics",
      "definition": "Recurrent networks can exhibit self-sustained irregular activity. In the classical large random rate-network model, the interaction strength controls a transition from a fixed point to chaos.",
      "refs": [
        "sompolinsky1988"
      ],
      "related": [
        "chaos",
        "sensitivity"
      ],
      "aliases": "chaotic neural networks recurrent neural network RNN"
    }
  ]
};
