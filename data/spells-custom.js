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
    }
  ]
};
