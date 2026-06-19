window.LRDR_CUSTOM_SPELLS = {
  "cra": [
    {
      "id": "souffle-de-l-humus",
      "name": "Souffle de l'Humus",
      "element": "Terre",
      "icon": "assets/icons/spells/cra/souffle-de-l-humus.png",
      "requiredLevel": 1,
      "selectedLevel": 5,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "2 a 9 PO",
      "ap": "4 PA",
      "description": "Dans les marais d'un royaume oublie, un Cra perdit la raison. Il crea une fleche d'ecorce vivante, suintant un poison lent... Elle s'enracine dans la chair, y fait pousser la peur.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 6 a 7 (terre)",
              "meta": "2 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "fleche-des-murmures",
      "name": "Fleche des Murmures",
      "element": "Air",
      "icon": "assets/icons/spells/cra/fleche-des-murmures.png",
      "requiredLevel": 42,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 11 PO",
      "ap": "3 PA",
      "description": "Forgee dans un souffle vole a une banshee, cette fleche glisse dans l'air sans bruit. On dit que ceux qu'elle touche entendent des voix... qui les poussent lentement vers la folie.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 9 a 11 (air)",
              "meta": "1 (C)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "fleche-du-revenant",
      "name": "Fleche du Revenant",
      "element": "Terre",
      "icon": "assets/icons/spells/cra/fleche-du-revenant.png",
      "requiredLevel": 148,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 10 PO",
      "ap": "3 PA",
      "description": "Lors d'une ancienne guerre, un Cra tira une fleche en bois maudit qui ne rata jamais sa cible. Depuis, elle erre, guidee par les ames qu'elle a fauchees... et frappe encore.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "-2 PM",
              "meta": "1 tour"
            },
            {
              "element": "Terre",
              "text": "Dommages : 13 a 14 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "fleche-du-neant",
      "name": "Fleche du Neant",
      "element": "Air",
      "icon": "assets/icons/spells/cra/fleche-du-neant.png",
      "requiredLevel": 54,
      "selectedLevel": 5,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "5 a 8 PO",
      "ap": "3 PA",
      "description": "Elle fend l'air sans un son, nee d'un pacte avec une entite oubliee. Ceux qu'elle effleure sentent le vent leur voler la vie... et leur dernier souffle murmure encore dans les cieux.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 6 a 8 (air)"
            },
            {
              "element": "Air",
              "text": "Vole 6 a 8 PDV (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "fleche-du-vent-cisaillant",
      "name": "Fleche du Vent Cisaillant",
      "element": "Air",
      "icon": "assets/icons/spells/cra/fleche-du-vent-cisaillant.png",
      "requiredLevel": 70,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/cra/page-02-01-fleche-du-vent-cisaillant.png",
      "description": "Fleche du Vent Cisaillant est un sort modifie de niveau 70, dont la portee est coupee sur la capture source, et coute 4 PA. Dommages : 31 a 33 (air) ; Augmente les degats de base du sort Fleche du Vent Cisaillant.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 31 a 33 (air)"
            },
            {
              "element": "Neutre",
              "text": "Augmente les degats de base du sort Fleche du Vent Cisaillant"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "fleche-du-phoenix",
      "name": "Fleche du Phoenix",
      "element": "Feu",
      "icon": "assets/icons/spells/cra/fleche-du-phoenix.png",
      "requiredLevel": 190,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/cra/page-02-02-fleche-du-phoenix.png",
      "description": "Fleche du Phoenix est un sort modifie de niveau 190, dont la portee est coupee sur la capture source, et coute 4 PA. Dommages : 31 a 33 (feu) ; Augmente les degats de base du sort Fleche du Phoenix.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 31 a 33 (feu)"
            },
            {
              "element": "Neutre",
              "text": "Augmente les degats de base du sort Fleche du Phoenix"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "2"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "sadida": [
    {
      "id": "ronce-aride",
      "name": "Ronce Aride",
      "element": "Feu",
      "icon": "assets/icons/spells/sadida/ronce-aride.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "description": "Depuis que la ronce a pousse sur les cendres du brasier, elle se prend pour une ronce aride... Une ronce de feu, qui embrase et calcine tout sur son passage.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 11 a 18 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "ronce-du-chaos",
      "name": "Ronce du Chaos",
      "element": "Terre",
      "icon": "assets/icons/spells/sadida/ronce-du-chaos.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "3 PA",
      "description": "La Ronce du Chaos est nee d'un Sadida errant, fou de douleur, qui fusionna la seve de l'Arbre Hakam avec des larmes de Dragoeuf. Cette ronce imprevisible frappe.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 6 a 10 (terre)"
            },
            {
              "element": "Air",
              "text": "Dommages : 6 a 10 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "ronce-reine",
      "name": "Ronce Reine",
      "element": "Feu",
      "icon": "assets/icons/spells/sadida/ronce-reine.png",
      "requiredLevel": 103,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sadida/page-03-01-ronce-reine.png",
      "description": "Ronce Reine est un sort modifie de niveau 103, dont la portee est coupee sur la capture source, et coute 4 PA. Dommages : 41 a 45 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 41 a 45 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "ronce-epineuse",
      "name": "Ronce Epineuse",
      "element": "Eau",
      "icon": "assets/icons/spells/sadida/ronce-epineuse.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sadida/page-03-02-ronce-epineuse.png",
      "description": "Ronce Epineuse est un sort modifie de niveau 106, dont la portee est coupee sur la capture source, et coute 4 PA. Dommages : 17 a 27 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 17 a 27 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "ronces-multiples-du-roi-sadi",
      "name": "Ronces Multiples du Roi Sadi",
      "element": "Feu",
      "icon": "assets/icons/spells/sadida/ronces-multiples-du-roi-sadi.png",
      "requiredLevel": 136,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "7 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sadida/page-03-03-ronces-multiples-du-roi-sadi.png",
      "description": "Ronces Multiples du Roi Sadi est un sort modifie de niveau 136, d'une portee de 7 PO, et coute 3 PA. Dommages : 7 a 14 (eau) ; Dommages : 7 a 14 (air) ; Dommages : 7 a 14 (feu) ; Dommages : 7 a 14 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 7 a 14 (eau)"
            },
            {
              "element": "Air",
              "text": "Dommages : 7 a 14 (air)"
            },
            {
              "element": "Feu",
              "text": "Dommages : 7 a 14 (feu)"
            },
            {
              "element": "Terre",
              "text": "Dommages : 7 a 14 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "1"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "ronces-aerienne",
      "name": "Ronces Aerienne",
      "element": "Air",
      "icon": "assets/icons/spells/sadida/ronces-aerienne.png",
      "requiredLevel": 160,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sadida/page-03-04-ronces-aerienne.png",
      "description": "Ronces Aerienne est un sort modifie de niveau 160, d'une portee de 1 a 7 PO, et coute 4 PA. Vole 6 a 65 PDV (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Vole 6 a 65 PDV (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "1"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "herbe-folle-ichonne",
      "name": "Herbe Folle Ichonne",
      "element": "Air",
      "icon": "assets/icons/spells/sadida/herbe-folle-ichonne.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sadida/page-03-05-herbe-folle-ichonne.png",
      "description": "Herbe Folle Ichonne est un sort modifie de niveau 170, d'une portee de 8 PO, et coute 3 PA. PM perdus : 2 a 4 (1 tour) ; Dommages : 11 a 20 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "PM perdus : 2 a 4",
              "meta": "1 tour"
            },
            {
              "element": "Air",
              "text": "Dommages : 11 a 20 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "1"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "sacrieur": [
    {
      "id": "pied-du-tsunami",
      "name": "Pied du Tsunami",
      "element": "Eau",
      "icon": "assets/icons/spells/sacrieur/pied-du-tsunami.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sacrieur/page-04-01-pied-du-tsunami.png",
      "description": "Pied du Tsunami est un sort modifie de niveau 101, d'une portee de 1 a 7 PO, et coute 4 PA. Vole 10 a 18 PDV (eau) ; 20 vol de chance (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 10 a 18 PDV (eau)"
            },
            {
              "element": "Eau",
              "text": "20 vol de chance",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "4"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/27"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "assaut",
      "name": "Assaut 51",
      "element": "Eau",
      "icon": "assets/icons/spells/sacrieur/assaut.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sacrieur/page-04-02-assaut.png",
      "description": "Assaut 51 est un sort modifie de niveau 109, d'une portee de 1 a 7 PO, et coute 3 PA. Dommages : 13 a 19 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 13 a 19 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/35"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "3"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/23"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "dissolution-des-enfers",
      "name": "Dissolution des Enfers",
      "element": "Air",
      "icon": "assets/icons/spells/sacrieur/dissolution-des-enfers.png",
      "requiredLevel": 117,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "0 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sacrieur/page-04-03-dissolution-des-enfers.png",
      "description": "Dissolution des Enfers est un sort modifie de niveau 117, d'une portee de 0 PO, et coute 4 PA. Vole 22 a 26 PDV (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Vole 22 a 26 PDV (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/27"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "absorption-terrestre",
      "name": "Absorption Terrestre",
      "element": "Eau",
      "icon": "assets/icons/spells/sacrieur/absorption-terrestre.png",
      "requiredLevel": 136,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 3 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sacrieur/page-04-04-absorption-terrestre.png",
      "description": "Absorption Terrestre est un sort modifie de niveau 136, d'une portee de 1 a 3 PO, et coute 4 PA. Dommages : 23 a 27 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 23 a 27 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/27"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "punition-sanglante",
      "name": "Punition Sanglante",
      "element": "Eau",
      "icon": "assets/icons/spells/sacrieur/punition-sanglante.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sacrieur/page-05-01-punition-sanglante.png",
      "description": "Punition Sanglante est un sort modifie de niveau 170, dont la portee est coupee sur la capture source, et coute 3 PA. Dommages : 9 a 13 (feu) ; +8 de dommages (4 tours) ; Dommages : 1% de la vie de l'attaquant (neutre) (1 tour).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 9 a 13 (feu)"
            },
            {
              "element": "Neutre",
              "text": "+8 de dommages",
              "meta": "4 tours"
            },
            {
              "element": "Neutre",
              "text": "Dommages : 1% de la vie de l'attaquant (neutre)",
              "meta": "1 tour"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/34"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "pandawa": [
    {
      "id": "poing-de-pierre",
      "name": "Poing de Pierre",
      "element": "Terre",
      "icon": "assets/icons/spells/pandawa/poing-de-pierre.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 1 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/pandawa/page-05-02-poing-de-pierre.png",
      "description": "Poing de Pierre est un sort modifie de niveau 101, d'une portee de 1 a 1 PO, et coute 3 PA. Dommages : 12 a 21 (terre) ; Vole 7 a 10 PDV (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 12 a 21 (terre)"
            },
            {
              "element": "Terre",
              "text": "Vole 7 a 10 PDV (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "3"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "uppercut-a-la-mcgregor",
      "name": "Uppercut a la McGregor",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/uppercut-a-la-mcgregor.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 1 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/pandawa/page-05-03-uppercut-a-la-mcgregor.png",
      "description": "Uppercut a la McGregor est un sort modifie de niveau 101, d'une portee de 1 a 1 PO, et coute 3 PA. Dommages : 16 a 21 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 16 a 21 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "3"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "tempete-alcoolisee",
      "name": "Tempete Alcoolisee",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/tempete-alcoolisee.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 6 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/pandawa/page-05-04-tempete-alcoolisee.png",
      "description": "Tempete Alcoolisee est un sort modifie de niveau 106, d'une portee de 1 a 6 PO, et coute 3 PA. Dommages : 13 a 22 (air) ; Fait reculer de 2 case(s).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 13 a 22 (air)"
            },
            {
              "element": "Neutre",
              "text": "Fait reculer de 2 case(s)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "la-charge-rocailleuse",
      "name": "Charge Rocailleuse",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/la-charge-rocailleuse.png",
      "requiredLevel": 154,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 5 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/pandawa/page-05-05-la-charge-rocailleuse.png",
      "description": "Charge Rocailleuse est un sort modifie de niveau 154, d'une portee de 1 a 5 PO, et coute 4 PA. Dommages : 22 a 36 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 22 a 36 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "flasque-terrestre",
      "name": "Flasque Terrestre",
      "element": "Air",
      "icon": "assets/icons/spells/pandawa/flasque-terrestre.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "2 a 5 PO",
      "ap": "2 PA",
      "sourceImage": "assets/spells/pandawa/page-06-01-flasque-terrestre.png",
      "description": "Flasque Terrestre est un sort modifie de niveau 170, d'une portee de 2 a 5 PO, et coute 2 PA. Dommages : 16 a 30 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 16 a 30 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "1"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pandatak-enflamme",
      "name": "Pandatak Enflamme",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/pandatak-enflamme.png",
      "requiredLevel": 180,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 6 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/pandawa/page-06-02-pandatak-enflamme.png",
      "description": "Pandatak Enflamme est un sort modifie de niveau 180, d'une portee de 1 a 6 PO, et coute 4 PA. Dommages : 26 a 35 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 26 a 35 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "feca": [
    {
      "id": "armure-brulante",
      "name": "Attaque Volcanique",
      "element": "Terre",
      "icon": "assets/icons/spells/feca/armure-brulante.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/feca/page-06-03-armure-brulante.png",
      "description": "Attaque Volcanique est un sort modifie de niveau 101, d'une portee de 1 a 8 PO, et coute 4 PA. Dommages : 7 a 13 (feu) ; Vole 7 a 13 PDV (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 7 a 13 (feu)"
            },
            {
              "element": "Terre",
              "text": "Vole 7 a 13 PDV (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "glyphe-protecteur",
      "name": "Voile des Abysses",
      "element": "Neutre",
      "icon": "assets/icons/spells/feca/glyphe-protecteur.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/feca/page-06-04-glyphe-protecteur.png",
      "description": "Voile des Abysses est un sort modifie de niveau 106, d'une portee de 1 a 8 PO, et coute 3 PA. PA perdus a la cible : 1 a 3 (1 tour) ; Dommages : 10 a 12 (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "PA perdus a la cible : 1 a 3",
              "meta": "1 tour"
            },
            {
              "element": "Eau",
              "text": "Dommages : 10 a 12 (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "retour-du-baton",
      "name": "Attaque Orageuse",
      "element": "Feu",
      "icon": "assets/icons/spells/feca/retour-du-baton.png",
      "requiredLevel": 113,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 6 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/feca/page-07-01-retour-du-baton.png",
      "description": "Attaque Orageuse est un sort modifie de niveau 113, d'une portee de 1 a 6 PO, et coute 4 PA. Dommages : 11 a 22 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 11 a 22 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "glyphe-abyssal",
      "name": "Secousse Lointaine",
      "element": "Eau",
      "icon": "assets/icons/spells/feca/glyphe-abyssal.png",
      "requiredLevel": 131,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "2 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/feca/page-07-02-glyphe-abyssal.png",
      "description": "Secousse Lointaine est un sort modifie de niveau 131, d'une portee de 2 a 8 PO, et coute 3 PA. Dommages : 16 a 24 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 16 a 24 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "bulle-tellurique",
      "name": "Poigne Tellurique",
      "element": "Eau",
      "icon": "assets/icons/spells/feca/bulle-tellurique.png",
      "requiredLevel": 148,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 3 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/feca/page-07-03-bulle-tellurique.png",
      "description": "Poigne Tellurique est un sort modifie de niveau 148, d'une portee de 1 a 3 PO, et coute 3 PA. Vole 21 a 35 PDV (eau) ; 20 vol de force (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 21 a 35 PDV (eau)"
            },
            {
              "element": "Terre",
              "text": "20 vol de force",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/35"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/35"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "glyphe-du-jugement",
      "name": "Glyphe Apocalyptique",
      "element": "Eau",
      "icon": "assets/icons/spells/feca/glyphe-du-jugement.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 5 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/feca/page-07-04-glyphe-du-jugement.png",
      "description": "Glyphe Apocalyptique est un sort modifie de niveau 170, d'une portee de 1 a 5 PO, et coute 4 PA. Dommages : 9 a 12 (eau) ; Dommages : 9 a 12 (terre) ; Dommages : 9 a 12 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 9 a 12 (eau)"
            },
            {
              "element": "Terre",
              "text": "Dommages : 9 a 12 (terre)"
            },
            {
              "element": "Feu",
              "text": "Dommages : 9 a 12 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "-"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "2"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          true
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "-"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "osamodas": [
    {
      "id": "plume-du-corbeau",
      "name": "Souffle Zephyr",
      "element": "Air",
      "icon": "assets/icons/spells/osamodas/plume-du-corbeau.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/osamodas/page-08-01-plume-du-corbeau.png",
      "description": "Souffle Zephyr est un sort modifie de niveau 101, d'une portee de 1 a 7 PO, et coute 4 PA. Dommages : 13 a 22 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 13 a 22 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "griffe-rocheuse",
      "name": "Fureur Sauvage",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/griffe-rocheuse.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-08-02-griffe-rocheuse.png",
      "description": "Fureur Sauvage est un sort modifie de niveau 101, d'une portee de 1 a 8 PO, et coute 3 PA. +9 a 16 de dommages (2 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+9 a 16 de dommages",
              "meta": "2 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "cri-sauvage",
      "name": "Patte Agiles",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/cri-sauvage.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-08-03-cri-sauvage.png",
      "description": "Patte Agiles est un sort modifie de niveau 106, d'une portee de 1 a 8 PO, et coute 3 PA. +4 PM (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+4 PM",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "benediction-bestiale",
      "name": "Elan de la Bete",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/benediction-bestiale.png",
      "requiredLevel": 126,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-08-04-benediction-bestiale.png",
      "description": "Elan de la Bete est un sort modifie de niveau 126, d'une portee de 1 a 8 PO, et coute 3 PA. +3 PA (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+3 PA",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "apogee-de-l-alize",
      "name": "Danse du Cyclone",
      "element": "Air",
      "icon": "assets/icons/spells/osamodas/apogee-de-l-alize.png",
      "requiredLevel": 131,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-09-01-apogee-de-l-alize.png",
      "description": "Danse du Cyclone est un sort modifie de niveau 131, dont la portee est coupee sur la capture source, et coute 3 PA. Vole 3 a 10 PDV (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Vole 3 a 10 PDV (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "dernier-souffle",
      "name": "Fureur Ouragan",
      "element": "Air",
      "icon": "assets/icons/spells/osamodas/dernier-souffle.png",
      "requiredLevel": 136,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/osamodas/page-09-02-dernier-souffle.png",
      "description": "Fureur Ouragan est un sort modifie de niveau 136, dont la portee est coupee sur la capture source, et coute 4 PA. Dommages : 11 a 14 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 11 a 14 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "lien-bestial",
      "name": "Apogee de l'Alize",
      "element": "Air",
      "icon": "assets/icons/spells/osamodas/lien-bestial.png",
      "requiredLevel": 154,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 3 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/osamodas/page-09-03-lien-bestial.png",
      "description": "Apogee de l'Alize est un sort modifie de niveau 154, d'une portee de 1 a 3 PO, et coute 4 PA. Dommages : 18 a 37 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 18 a 37 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "soin-naturel",
      "name": "Dernier Espoir",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/soin-naturel.png",
      "requiredLevel": 160,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-09-04-soin-naturel.png",
      "description": "Dernier Espoir est un sort modifie de niveau 160, d'une portee de 1 a 8 PO, et coute 3 PA. +201 a 250 en vitalite (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+201 a 250 en vitalite",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "rage-primordiale",
      "name": "Rage Primordiale",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/rage-primordiale.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "3 PA",
      "sourceImage": "assets/spells/osamodas/page-10-01-rage-primordiale.png",
      "description": "Rage Primordiale est un sort modifie de niveau 170, dont la portee est coupee sur la capture source, et coute 3 PA. Augmente les dommages de 100% (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Augmente les dommages de 100%",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "enutrof": [
    {
      "id": "flammes-traitresses",
      "name": "Flammes Traitresses",
      "element": "Feu",
      "icon": "assets/icons/spells/enutrof/flammes-traitresses.png",
      "requiredLevel": 103,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "9 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/enutrof/page-10-02-flammes-traitresses.png",
      "description": "Flammes Traitresses est un sort modifie de niveau 103, d'une portee de 9 PO, et coute 4 PA. Enleve les envoutements ; Dommages : 20 (neutre) ; Fait avancer de 2 case(s).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Enleve les envoutements"
            },
            {
              "element": "Neutre",
              "text": "Dommages : 20 (neutre)"
            },
            {
              "element": "Neutre",
              "text": "Fait avancer de 2 case(s)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/10"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/6"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "rapine-souterraine",
      "name": "Rapine Souterraine",
      "element": "Feu",
      "icon": "assets/icons/spells/enutrof/rapine-souterraine.png",
      "requiredLevel": 113,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "2 a 8 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/enutrof/page-10-03-rapine-souterraine.png",
      "description": "Rapine Souterraine est un sort modifie de niveau 113, d'une portee de 2 a 8 PO, et coute 4 PA. Dommages : 9 a 15 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 9 a 15 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/20"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pelle-du-maree-haut",
      "name": "Pelle du Maree-Haut",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-du-maree-haut.png",
      "requiredLevel": 121,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/enutrof/page-10-04-pelle-du-maree-haut.png",
      "description": "Pelle du Maree-Haut est un sort modifie de niveau 121, d'une portee de 1 a 4 PO, et coute 4 PA. Dommages : 21 a 25 (eau) ; Vole 1 PM.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 21 a 25 (eau)"
            },
            {
              "element": "Neutre",
              "text": "Vole 1 PM"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/34"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pelle-terrifiante",
      "name": "Pelle Terrifiante",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-terrifiante.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "5 PA",
      "sourceImage": "assets/spells/enutrof/page-10-05-pelle-terrifiante.png",
      "description": "Pelle Terrifiante est un sort modifie de niveau 170, d'une portee de 1 a 7 PO, et coute 5 PA. Dommages : 50 (eau) ; PM perdus : 1 (1 tour).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 50 (eau)"
            },
            {
              "element": "Neutre",
              "text": "PM perdus : 1",
              "meta": "1 tour"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/34"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pelle-du-maree-haut",
      "name": "Pelle du Maree-Haut",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-du-maree-haut.png",
      "requiredLevel": 121,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/enutrof/page-11-01-pelle-du-maree-haut.png",
      "description": "Pelle du Maree-Haut est un sort modifie de niveau 121, d'une portee de 1 a 4 PO, et coute 4 PA. Dommages : 21 a 25 (eau) ; Vole 1 PM.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 21 a 25 (eau)"
            },
            {
              "element": "Neutre",
              "text": "Vole 1 PM"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/34"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pelle-terrifiante",
      "name": "Pelle Terrifiante",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-terrifiante.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 7 PO",
      "ap": "5 PA",
      "sourceImage": "assets/spells/enutrof/page-11-02-pelle-terrifiante.png",
      "description": "Pelle Terrifiante est un sort modifie de niveau 170, d'une portee de 1 a 7 PO, et coute 5 PA. Dommages : 50 (eau) ; PM perdus : 1 (1 tour).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 50 (eau)"
            },
            {
              "element": "Neutre",
              "text": "PM perdus : 1",
              "meta": "1 tour"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/34"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "sram": [
    {
      "id": "morsure-des-profondeurs",
      "name": "Morsure des Profondeurs",
      "element": "Eau",
      "icon": "assets/icons/spells/sram/morsure-des-profondeurs.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 5 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sram/page-11-03-morsure-des-profondeurs.png",
      "description": "Morsure des Profondeurs est un sort modifie de niveau 101, d'une portee de 1 a 5 PO, et coute 3 PA. Vole 20 PDV (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 20 PDV (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "venin-abyssal",
      "name": "Venin Abyssal",
      "element": "Eau",
      "icon": "assets/icons/spells/sram/venin-abyssal.png",
      "requiredLevel": 103,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sram/page-11-04-venin-abyssal.png",
      "description": "Venin Abyssal est un sort modifie de niveau 103, d'une portee de 1 a 4 PO, et coute 3 PA. Dommages : 8 a 9 (eau) (2 tours) ; Dommages : 8 a 9 (terre) (2 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 8 a 9 (eau)",
              "meta": "2 tours"
            },
            {
              "element": "Terre",
              "text": "Dommages : 8 a 9 (terre)",
              "meta": "2 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "siphon-des-ames",
      "name": "Siphon des Ames",
      "element": "Eau",
      "icon": "assets/icons/spells/sram/siphon-des-ames.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "0 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sram/page-12-01-siphon-des-ames.png",
      "description": "Siphon des Ames est un sort modifie de niveau 106, d'une portee de 0 PO, et coute 4 PA. Vole 11 a 25 PDV (eau) ; 25 vol de chance (3 tours) ; 25 vol de force (3 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 11 a 25 PDV (eau)"
            },
            {
              "element": "Eau",
              "text": "25 vol de chance",
              "meta": "3 tours"
            },
            {
              "element": "Terre",
              "text": "25 vol de force",
              "meta": "3 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pillage-funeste",
      "name": "Pillage Funeste",
      "element": "Eau",
      "icon": "assets/icons/spells/sram/pillage-funeste.png",
      "requiredLevel": 70,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 2 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sram/page-12-02-pillage-funeste.png",
      "description": "Pillage Funeste est un sort modifie de niveau 70, d'une portee de 1 a 2 PO, et coute 4 PA. Vole 1 a 250 d'or ; Dommages : 18 a 32 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Vole 1 a 250 d'or"
            },
            {
              "element": "Terre",
              "text": "Dommages : 18 a 32 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/30"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/30"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "profanation-de-sanctuaire",
      "name": "Profanation de Sanctuaire",
      "element": "Air",
      "icon": "assets/icons/spells/sram/profanation-de-sanctuaire.png",
      "requiredLevel": 190,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 2 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/sram/page-12-03-profanation-de-sanctuaire.png",
      "description": "Profanation de Sanctuaire est un sort modifie de niveau 190, d'une portee de 1 a 2 PO, et coute 4 PA. Dommages : 41 a 60 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 41 a 60 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/90"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/90"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "l-etreinte-des-damnes",
      "name": "L'Etreinte des Damnes",
      "element": "Eau",
      "icon": "assets/icons/spells/sram/l-etreinte-des-damnes.png",
      "requiredLevel": 200,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/sram/page-12-04-l-etreinte-des-damnes.png",
      "description": "L'Etreinte des Damnes est un sort modifie de niveau 200, d'une portee de 1 a 4 PO, et coute 3 PA. Dommages : 41 a 60 (terre) ; Dommages : 41 a 60 (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 41 a 60 (terre)"
            },
            {
              "element": "Eau",
              "text": "Dommages : 41 a 60 (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "-"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          true
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "-"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "xelor": [
    {
      "id": "gelure-spectrale",
      "name": "Gelure Spectrale",
      "element": "Air",
      "icon": "assets/icons/spells/xelor/gelure-spectrale.png",
      "requiredLevel": 103,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "3 a 6 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/xelor/page-13-01-gelure-spectrale.png",
      "description": "Gelure Spectrale est un sort modifie de niveau 103, d'une portee de 3 a 6 PO, et coute 3 PA. Dommages : 10 a 15 (eau) ; PA perdus a la cible : 2 (1 tour) ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 10 a 15 (eau)"
            },
            {
              "element": "Neutre",
              "text": "PA perdus a la cible : 2",
              "meta": "1 tour"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "1"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "sablier-enracine",
      "name": "Sablier Enracine",
      "element": "Eau",
      "icon": "assets/icons/spells/xelor/sablier-enracine.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 9 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/xelor/page-13-02-sablier-enracine.png",
      "description": "Sablier Enracine est un sort modifie de niveau 109, d'une portee de 1 a 9 PO, et coute 4 PA. Vole 13 a 29 PDV (terre) ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA ; Vole 1 PO (1 tour).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Vole 13 a 29 PDV (terre)"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            },
            {
              "element": "Neutre",
              "text": "Vole 1 PO",
              "meta": "1 tour"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/35"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/35"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "sablier-abyssal",
      "name": "Sablier Abyssal",
      "element": "Eau",
      "icon": "assets/icons/spells/xelor/sablier-abyssal.png",
      "requiredLevel": 117,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/xelor/page-13-03-sablier-abyssal.png",
      "description": "Sablier Abyssal est un sort modifie de niveau 117, d'une portee de 1 a 8 PO, et coute 3 PA. Vole 15 a 24 PDV (eau) ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 15 a 24 PDV (eau)"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "engrenage-loyal",
      "name": "Engrenage Loyal",
      "element": "Air",
      "icon": "assets/icons/spells/xelor/engrenage-loyal.png",
      "requiredLevel": 142,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "0 PO",
      "ap": "2 PA",
      "sourceImage": "assets/spells/xelor/page-13-04-engrenage-loyal.png",
      "description": "Engrenage Loyal est un sort modifie de niveau 142, d'une portee de 0 PO, et coute 2 PA. +3 PA (2 tours) ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+3 PA",
              "meta": "2 tours"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "-"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "3"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "-"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "larcin-temporel",
      "name": "Larcin Temporel",
      "element": "Eau",
      "icon": "assets/icons/spells/xelor/larcin-temporel.png",
      "requiredLevel": 180,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/xelor/page-13-05-larcin-temporel.png",
      "description": "Larcin Temporel est un sort modifie de niveau 180, d'une portee de 1 a 4 PO, et coute 4 PA. Dommages : 41 a 45 (eau) ; Vole 1 PA ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 41 a 45 (eau)"
            },
            {
              "element": "Neutre",
              "text": "Vole 1 PA"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "sablier-ardent",
      "name": "Sablier Ardent",
      "element": "Feu",
      "icon": "assets/icons/spells/xelor/sablier-ardent.png",
      "requiredLevel": 190,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 5 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/xelor/page-13-06-sablier-ardent.png",
      "description": "Sablier Ardent est un sort modifie de niveau 190, d'une portee de 1 a 5 PO, et coute 4 PA. Dommages : 41 a 45 (eau) ; Vole 1 PA ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Vole 41 a 45 PDV (feu)"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "sablier-ardent",
      "name": "Sablier Ardent",
      "element": "Feu",
      "icon": "assets/icons/spells/xelor/sablier-ardent.png",
      "requiredLevel": 190,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 5 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/xelor/page-14-01-sablier-ardent.png",
      "description": "Sablier Ardent est un sort modifie de niveau 190, d'une portee de 1 a 5 PO, et coute 4 PA. Dommages : 41 a 45 (eau) ; Vole 1 PA ; Dans 90% des cas : pas d'effet complementaire ; Dans 10% des cas : ajoute +1 PA.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Vole 41 a 45 PDV (feu)"
            },
            {
              "element": "Neutre",
              "text": "Dans 90% des cas : pas d'effet complementaire"
            },
            {
              "element": "Neutre",
              "text": "Dans 10% des cas : ajoute +1 PA"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "ecaflip": [
    {
      "id": "bourrasque-du-hasard",
      "name": "Bourrasque du Hasard",
      "element": "Feu",
      "icon": "assets/icons/spells/ecaflip/bourrasque-du-hasard.png",
      "requiredLevel": 101,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "7 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/ecaflip/page-14-02-bourrasque-du-hasard.png",
      "description": "Bourrasque du Hasard est un sort modifie de niveau 101, d'une portee de 7 PO, et coute 3 PA. Dommages : 6 a 19 (air) ; PDV rendus : 5 a 12 ; PDV rendus : 8 a 22.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 6 a 19 (air)"
            },
            {
              "element": "Neutre",
              "text": "PDV rendus : 5 a 12"
            },
            {
              "element": "Neutre",
              "text": "PDV rendus : 8 a 22"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "rafale-de-poker",
      "name": "Rafale de Poker",
      "element": "Air",
      "icon": "assets/icons/spells/ecaflip/rafale-de-poker.png",
      "requiredLevel": 103,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/ecaflip/page-14-03-rafale-de-poker.png",
      "description": "Rafale de Poker est un sort modifie de niveau 103, d'une portee de 1 a 4 PO, et coute 3 PA. Dans 50% des cas : dommages 1 a 50 (feu) ; Dans 50% des cas : dommages 1 a 50 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dans 50% des cas : dommages 1 a 50 (feu)"
            },
            {
              "element": "Air",
              "text": "Dans 50% des cas : dommages 1 a 50 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "esprit-felin",
      "name": "Esprit Felin",
      "element": "Feu",
      "icon": "assets/icons/spells/ecaflip/esprit-felin.png",
      "requiredLevel": 148,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 1 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/ecaflip/page-14-04-esprit-felin.png",
      "description": "Esprit Felin est un sort modifie de niveau 148, d'une portee de 1 a 1 PO, et coute 3 PA. Dommages : 21 a 45 (terre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Dommages : 21 a 45 (terre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "vague-celeste",
      "name": "Vague Celeste",
      "element": "Eau",
      "icon": "assets/icons/spells/ecaflip/vague-celeste.png",
      "requiredLevel": 170,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/ecaflip/page-14-05-vague-celeste.png",
      "description": "Vague Celeste est un sort modifie de niveau 170, d'une portee de 1 a 4 PO, et coute 4 PA. Dommages : 24 a 29 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Dommages : 24 a 29 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          false
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "quitte-ou-double-fatal",
      "name": "Quitte ou Double Fatal",
      "element": "Terre",
      "icon": "assets/icons/spells/ecaflip/quitte-ou-double-fatal.png",
      "requiredLevel": 190,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "5 PA",
      "sourceImage": "assets/spells/ecaflip/page-15-01-quitte-ou-double-fatal.png",
      "description": "Quitte ou Double Fatal est un sort modifie de niveau 190, d'une portee de 1 a 4 PO, et coute 5 PA. Dommages : 8 a 16 (eau) ; Dommages : 8 a 16 (terre) ; Dommages : 8 a 16 (air) ; Dommages : 8 a 16 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 8 a 16 (eau)"
            },
            {
              "element": "Terre",
              "text": "Dommages : 8 a 16 (terre)"
            },
            {
              "element": "Air",
              "text": "Dommages : 8 a 16 (air)"
            },
            {
              "element": "Feu",
              "text": "Dommages : 8 a 16 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "eniripsa": [
    {
      "id": "le-baiser-incandescent",
      "name": "Le Baiser Incandescent",
      "element": "Feu",
      "icon": "assets/icons/spells/eniripsa/le-baiser-incandescent.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/eniripsa/page-15-02-le-baiser-incandescent.png",
      "description": "Le Baiser Incandescent est un sort modifie de niveau 106, d'une portee de 1 a 8 PO, et coute 4 PA. Dommages : 18 a 22 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 18 a 22 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "impulsion-vitale",
      "name": "Impulsion Vitale",
      "element": "Eau",
      "icon": "assets/icons/spells/eniripsa/impulsion-vitale.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "0 PO",
      "ap": "2 PA",
      "sourceImage": "assets/spells/eniripsa/page-15-03-impulsion-vitale.png",
      "description": "Impulsion Vitale est un sort modifie de niveau 109, d'une portee de 0 PO, et coute 2 PA. +3 PA (5 tours) ; Dommages : 10% de la vie de l'attaquant (neutre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+3 PA",
              "meta": "5 tours"
            },
            {
              "element": "Neutre",
              "text": "Dommages : 10% de la vie de l'attaquant (neutre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "5"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "larme-d-ondine",
      "name": "Larme d'Ondine",
      "element": "Neutre",
      "icon": "assets/icons/spells/eniripsa/larme-d-ondine.png",
      "requiredLevel": 142,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/eniripsa/page-15-04-larme-d-ondine.png",
      "description": "Larme d'Ondine est un sort modifie de niveau 142, d'une portee de 4 PO, et coute 4 PA. Vole 31 a 40 PDV (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 31 a 40 PDV (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "le-baiser-incandescent",
      "name": "Le Baiser Incandescent",
      "element": "Feu",
      "icon": "assets/icons/spells/eniripsa/le-baiser-incandescent.png",
      "requiredLevel": 106,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 8 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/eniripsa/page-16-01-le-baiser-incandescent.png",
      "description": "Le Baiser Incandescent est un sort modifie de niveau 106, d'une portee de 1 a 8 PO, et coute 4 PA. Dommages : 18 a 22 (feu).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Dommages : 18 a 22 (feu)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "impulsion-vitale",
      "name": "Impulsion Vitale",
      "element": "Eau",
      "icon": "assets/icons/spells/eniripsa/impulsion-vitale.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "0 PO",
      "ap": "2 PA",
      "sourceImage": "assets/spells/eniripsa/page-16-02-impulsion-vitale.png",
      "description": "Impulsion Vitale est un sort modifie de niveau 109, d'une portee de 0 PO, et coute 2 PA. +3 PA (5 tours) ; Dommages : 10% de la vie de l'attaquant (neutre).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "+3 PA",
              "meta": "5 tours"
            },
            {
              "element": "Neutre",
              "text": "Dommages : 10% de la vie de l'attaquant (neutre)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "5"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "larme-d-ondine",
      "name": "Larme d'Ondine",
      "element": "Neutre",
      "icon": "assets/icons/spells/eniripsa/larme-d-ondine.png",
      "requiredLevel": 142,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/eniripsa/page-16-03-larme-d-ondine.png",
      "description": "Larme d'Ondine est un sort modifie de niveau 142, d'une portee de 4 PO, et coute 4 PA. Vole 31 a 40 PDV (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 31 a 40 PDV (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "2"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          true
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ],
  "iop": [
    {
      "id": "vague-du-guerrier",
      "name": "Vague du Guerrier",
      "element": "Eau",
      "icon": "assets/icons/spells/iop/vague-du-guerrier.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "5 PA",
      "sourceImage": "assets/spells/iop/page-16-04-vague-du-guerrier.png",
      "description": "Vague du Guerrier est un sort modifie de niveau 109, dont la portee est coupee sur la capture source, et coute 5 PA. Dommages : 61 a 65 (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 61 a 65 (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "vague-du-guerrier",
      "name": "Vague du Guerrier",
      "element": "Eau",
      "icon": "assets/icons/spells/iop/vague-du-guerrier.png",
      "requiredLevel": 109,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "5 PA",
      "sourceImage": "assets/spells/iop/page-17-01-vague-du-guerrier.png",
      "description": "Vague du Guerrier est un sort modifie de niveau 109, dont la portee est coupee sur la capture source, et coute 5 PA. Dommages : 61 a 65 (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 61 a 65 (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/50"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "2"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/50"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "couperet-ardent",
      "name": "Couperet Ardent",
      "element": "Feu",
      "icon": "assets/icons/spells/iop/couperet-ardent.png",
      "requiredLevel": 121,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "-",
      "ap": "4 PA",
      "sourceImage": "assets/spells/iop/page-17-02-couperet-ardent.png",
      "description": "Couperet Ardent est un sort modifie de niveau 121, dont la portee est coupee sur la capture source, et coute 4 PA. Vole 11 a 40 PDV (eau) ; -2 a 3 aux coups critiques (2 tours).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 11 a 40 PDV (eau)"
            },
            {
              "element": "Neutre",
              "text": "-2 a 3 aux coups critiques",
              "meta": "2 tours"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/40"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/40"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "poing-epique",
      "name": "Poing Epique",
      "element": "Air",
      "icon": "assets/icons/spells/iop/poing-epique.png",
      "requiredLevel": 142,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 4 PO",
      "ap": "4 PA",
      "sourceImage": "assets/spells/iop/page-17-03-poing-epique.png",
      "description": "Poing Epique est un sort modifie de niveau 142, d'une portee de 1 a 4 PO, et coute 4 PA. Dommages : 1 a 20 (eau) ; Dommages : 1 a 20 (air).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Dommages : 1 a 20 (eau)"
            },
            {
              "element": "Air",
              "text": "Dommages : 1 a 20 (air)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "-"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          false
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    },
    {
      "id": "pression-tellurique",
      "name": "Geyser du Colosse",
      "element": "Air",
      "icon": "assets/icons/spells/iop/pression-tellurique.png",
      "requiredLevel": 180,
      "selectedLevel": 6,
      "levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "range": "1 a 1 PO",
      "ap": "3 PA",
      "sourceImage": "assets/spells/iop/page-17-04-pression-tellurique.png",
      "description": "Geyser du Colosse est un sort modifie de niveau 180, d'une portee de 1 a 1 PO, et coute 3 PA. Vole 24 a 26 PDV (eau).",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Vole 24 a 26 PDV (eau)"
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        [
          "Probabilite de coup critique",
          "1/45"
        ],
        [
          "Probabilite d'echec",
          "1/100"
        ],
        [
          "Nb. de lancers par tour",
          "-"
        ],
        [
          "Nb. de lancers par tour par joueur",
          "3"
        ],
        [
          "Nb. de tours entre deux lancers",
          "-"
        ]
      ],
      "rules": [
        [
          "Portee modifiable",
          false
        ],
        [
          "Ligne de vue",
          true
        ],
        [
          "Lancer en ligne",
          true
        ],
        [
          "Cellules libres",
          false
        ],
        [
          "EC fini le tour",
          false
        ],
        [
          "CC actuels",
          "1/45"
        ]
      ],
      "levelData": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {}
      }
    }
  ]
};
