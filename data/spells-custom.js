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
        ["Probabilite de coup critique", "1/30"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "1"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", true],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/30"]
      ]
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
        ["Probabilite de coup critique", "1/40"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "2"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", false],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/40"]
      ]
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
        ["Probabilite de coup critique", "1/40"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "2"],
        ["Nb. de lancers par tour par joueur", "1"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", true],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/40"]
      ]
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
        ["Probabilite de coup critique", "1/40"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "2"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", false],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/40"]
      ]
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
      "ap": "-",
      "sourceImage": "assets/spells/cra/page-02-01-fleche-du-vent-cisaillant.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "ap": "-",
      "sourceImage": "assets/spells/cra/page-02-02-fleche-du-phoenix.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
        ["Probabilite de coup critique", "1/45"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "2"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", true],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/45"]
      ]
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
        ["Probabilite de coup critique", "1/50"],
        ["Probabilite d'echec", "1/100"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", true],
        ["Ligne de vue", true],
        ["Lancer en ligne", false],
        ["Cellules libres", false],
        ["EC fini le tour", false],
        ["CC actuels", "1/50"]
      ]
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
      "ap": "-",
      "sourceImage": "assets/spells/sadida/page-03-01-ronce-reine.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "ap": "-",
      "sourceImage": "assets/spells/sadida/page-03-02-ronce-epineuse.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sadida/page-03-03-ronces-multiples-du-roi-sadi.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sadida/page-03-04-ronces-aerienne.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sadida/page-03-05-herbe-folle-ichonne.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sacrieur/page-04-01-pied-du-tsunami.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "assaut",
      "name": "Assaut",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sacrieur/page-04-02-assaut.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sacrieur/page-04-03-dissolution-des-enfers.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sacrieur/page-04-04-absorption-terrestre.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "punition-sanglante",
      "name": "Punition Sanglante",
      "element": "Eau",
      "icon": "assets/icons/spells/sacrieur/punition-sanglante.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/sacrieur/page-05-01-punition-sanglante.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "pandawa": [
    {
      "id": "poing-de-pierre",
      "name": "Poing de Pierre",
      "element": "Terre",
      "icon": "assets/icons/spells/pandawa/poing-de-pierre.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-05-02-poing-de-pierre.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-05-03-uppercut-a-la-mcgregor.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "tempete-alcoolisee",
      "name": "Tempete Alcoolisee",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/tempete-alcoolisee.png",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-05-04-tempete-alcoolisee.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "la-charge-rocailleuse",
      "name": "La Charge Rocailleuse",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/la-charge-rocailleuse.png",
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
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-05-05-la-charge-rocailleuse.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "flasque-terrestre",
      "name": "Flasque Terrestre",
      "element": "Air",
      "icon": "assets/icons/spells/pandawa/flasque-terrestre.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-06-01-flasque-terrestre.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pandatak-enflamme",
      "name": "Pandatak Enflamme",
      "element": "Eau",
      "icon": "assets/icons/spells/pandawa/pandatak-enflamme.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/pandawa/page-06-02-pandatak-enflamme.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "feca": [
    {
      "id": "armure-brulante",
      "name": "Armure Brulante",
      "element": "Terre",
      "icon": "assets/icons/spells/feca/armure-brulante.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-06-03-armure-brulante.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "glyphe-protecteur",
      "name": "Glyphe Protecteur",
      "element": "Neutre",
      "icon": "assets/icons/spells/feca/glyphe-protecteur.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-06-04-glyphe-protecteur.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "retour-du-baton",
      "name": "Retour du Baton",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-07-01-retour-du-baton.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "glyphe-abyssal",
      "name": "Glyphe Abyssal",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-07-02-glyphe-abyssal.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "bulle-tellurique",
      "name": "Bulle Tellurique",
      "element": "Eau",
      "icon": "assets/icons/spells/feca/bulle-tellurique.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-07-03-bulle-tellurique.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "glyphe-du-jugement",
      "name": "Glyphe du Jugement",
      "element": "Eau",
      "icon": "assets/icons/spells/feca/glyphe-du-jugement.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/feca/page-07-04-glyphe-du-jugement.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "osamodas": [
    {
      "id": "plume-du-corbeau",
      "name": "Plume du Corbeau",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-08-01-plume-du-corbeau.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "griffe-rocheuse",
      "name": "Griffe Rocheuse",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-08-02-griffe-rocheuse.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "cri-sauvage",
      "name": "Cri Sauvage",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-08-03-cri-sauvage.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "benediction-bestiale",
      "name": "Benediction Bestiale",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-08-04-benediction-bestiale.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "apogee-de-l-alize",
      "name": "Apogee de l'Alize",
      "element": "Air",
      "icon": "assets/icons/spells/osamodas/apogee-de-l-alize.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-09-01-apogee-de-l-alize.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "dernier-souffle",
      "name": "Dernier Souffle",
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
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-09-02-dernier-souffle.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "lien-bestial",
      "name": "Lien Bestial",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-09-03-lien-bestial.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "soin-naturel",
      "name": "Soin Naturel",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/soin-naturel.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-09-04-soin-naturel.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "rage-primordiale",
      "name": "Rage Primordiale",
      "element": "Eau",
      "icon": "assets/icons/spells/osamodas/rage-primordiale.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/osamodas/page-10-01-rage-primordiale.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "enutrof": [
    {
      "id": "flammes-traitresses",
      "name": "Flammes Traitresses",
      "element": "Feu",
      "icon": "assets/icons/spells/enutrof/flammes-traitresses.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-10-02-flammes-traitresses.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "rapine-souterraine",
      "name": "Rapine Souterraine",
      "element": "Feu",
      "icon": "assets/icons/spells/enutrof/rapine-souterraine.png",
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
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-10-03-rapine-souterraine.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pelle-du-maree-haut",
      "name": "Pelle du Maree-Haut",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-du-maree-haut.png",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-10-04-pelle-du-maree-haut.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pelle-terrifiante",
      "name": "Pelle Terrifiante",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-terrifiante.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-10-05-pelle-terrifiante.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pelle-du-maree-haut",
      "name": "Pelle du Maree-Haut",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-du-maree-haut.png",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-11-01-pelle-du-maree-haut.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pelle-terrifiante",
      "name": "Pelle Terrifiante",
      "element": "Air",
      "icon": "assets/icons/spells/enutrof/pelle-terrifiante.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/enutrof/page-11-02-pelle-terrifiante.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-11-03-morsure-des-profondeurs.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-11-04-venin-abyssal.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-12-01-siphon-des-ames.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-12-02-pillage-funeste.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-12-03-profanation-de-sanctuaire.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/sram/page-12-04-l-etreinte-des-damnes.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-01-gelure-spectrale.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-02-sablier-enracine.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-03-sablier-abyssal.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-04-engrenage-loyal.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-05-larcin-temporel.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-13-06-sablier-ardent.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/xelor/page-14-01-sablier-ardent.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "ecaflip": [
    {
      "id": "bourrasque-du-hasard",
      "name": "Bourrasque du Hasard",
      "element": "Feu",
      "icon": "assets/icons/spells/ecaflip/bourrasque-du-hasard.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/ecaflip/page-14-02-bourrasque-du-hasard.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "rafale-de-poker",
      "name": "Rafale de Poker",
      "element": "Air",
      "icon": "assets/icons/spells/ecaflip/rafale-de-poker.png",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/ecaflip/page-14-03-rafale-de-poker.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "esprit-felin",
      "name": "Esprit Felin",
      "element": "Feu",
      "icon": "assets/icons/spells/ecaflip/esprit-felin.png",
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
      "ap": "-",
      "sourceImage": "assets/spells/ecaflip/page-14-04-esprit-felin.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "vague-celeste",
      "name": "Vague Celeste",
      "element": "Eau",
      "icon": "assets/icons/spells/ecaflip/vague-celeste.png",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/ecaflip/page-14-05-vague-celeste.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "quitte-ou-double-fatal",
      "name": "Quitte ou Double Fatal",
      "element": "Terre",
      "icon": "assets/icons/spells/ecaflip/quitte-ou-double-fatal.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/ecaflip/page-15-01-quitte-ou-double-fatal.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Terre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "eniripsa": [
    {
      "id": "le-baiser-incandescent",
      "name": "Le Baiser Incandescent",
      "element": "Feu",
      "icon": "assets/icons/spells/eniripsa/le-baiser-incandescent.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-15-02-le-baiser-incandescent.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "impulsion-vitale",
      "name": "Impulsion Vitale",
      "element": "Eau",
      "icon": "assets/icons/spells/eniripsa/impulsion-vitale.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-15-03-impulsion-vitale.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "larme-d-ondine",
      "name": "Larme d'Ondine",
      "element": "Neutre",
      "icon": "assets/icons/spells/eniripsa/larme-d-ondine.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-15-04-larme-d-ondine.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "le-baiser-incandescent",
      "name": "Le Baiser Incandescent",
      "element": "Feu",
      "icon": "assets/icons/spells/eniripsa/le-baiser-incandescent.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-16-01-le-baiser-incandescent.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "impulsion-vitale",
      "name": "Impulsion Vitale",
      "element": "Eau",
      "icon": "assets/icons/spells/eniripsa/impulsion-vitale.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-16-02-impulsion-vitale.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "larme-d-ondine",
      "name": "Larme d'Ondine",
      "element": "Neutre",
      "icon": "assets/icons/spells/eniripsa/larme-d-ondine.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/eniripsa/page-16-03-larme-d-ondine.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Neutre",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ],
  "iop": [
    {
      "id": "vague-du-guerrier",
      "name": "Vague du Guerrier",
      "element": "Eau",
      "icon": "assets/icons/spells/iop/vague-du-guerrier.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/iop/page-16-04-vague-du-guerrier.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "vague-du-guerrier",
      "name": "Vague du Guerrier",
      "element": "Eau",
      "icon": "assets/icons/spells/iop/vague-du-guerrier.png",
      "requiredLevel": "-",
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
      "ap": "-",
      "sourceImage": "assets/spells/iop/page-17-01-vague-du-guerrier.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Eau",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "ap": "-",
      "sourceImage": "assets/spells/iop/page-17-02-couperet-ardent.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Feu",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/iop/page-17-03-poing-epique.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    },
    {
      "id": "pression-tellurique",
      "name": "Pression Tellurique",
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
      "range": "-",
      "ap": "-",
      "sourceImage": "assets/spells/iop/page-17-04-pression-tellurique.png",
      "description": "Informations a recopier depuis le PDF.",
      "tabs": [
        {
          "label": "Normaux",
          "effects": [
            {
              "element": "Air",
              "text": "Effet a completer depuis le PDF."
            }
          ]
        },
        {
          "label": "Critiques",
          "effects": []
        }
      ],
      "characteristics": [
        ["Probabilite de coup critique", "-"],
        ["Probabilite d'echec", "-"],
        ["Nb. de lancers par tour", "-"],
        ["Nb. de lancers par tour par joueur", "-"],
        ["Nb. de tours entre deux lancers", "-"]
      ],
      "rules": [
        ["Portee modifiable", "-"],
        ["Ligne de vue", "-"],
        ["Lancer en ligne", "-"],
        ["Cellules libres", "-"],
        ["EC fini le tour", "-"],
        ["CC actuels", "-"]
      ]
    }
  ]
};
