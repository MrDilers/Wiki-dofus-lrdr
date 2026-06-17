window.LRDR_CUSTOM_SPELLS = {
  "cra": [
    {
      "id": "souffle-de-l-humus",
      "name": "Souffle de l'Humus",
      "element": "Terre",
      "icon": "assets/icons/spells/cra/souffle-de-l-humus.png",
      "requiredLevel": 1,
      "selectedLevel": 5,
      "levels": [1, 2, 3, 4, 5, 6],
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
      "levels": [1, 2, 3, 4, 5, 6],
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
      "levels": [1, 2, 3, 4, 5, 6],
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
      "levels": [1, 2, 3, 4, 5, 6],
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
      "levels": [1, 2, 3, 4, 5, 6],
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
      "levels": [1, 2, 3, 4, 5, 6],
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
    }
  ]
};
