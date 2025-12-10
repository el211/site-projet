// file: js/lessons/fr-lessons.js (Contenu des leçons en français)

window.LESSONS = [

  // --- SECTION 1 : INTRODUCTION & AFFICHAGE (1-10) ---
  {
    id: 1,
    title: "La première commande (println)",
    prompt:
      "Affiche le message exact : <span class='highlight'>Hello, Java World!</span>",
    validation: (input) =>
      input.includes("System.out.println") &&
      input.includes("\"Hello, Java World!\"") &&
      input.includes(";"),
    correct_output: "Hello, Java World!",
    error_tip:
      "Assure-toi que ta chaîne est entre guillemets doubles et se termine par un point-virgule (;).",
    hint: "La commande est `System.out.println()`.",
    expected_code: 'System.out.println("Hello, Java World!");'
  },
  {
    id: 2,
    title: "Afficher des nombres",
    prompt: "Affiche le nombre 19164 directement (sans guillemets).",
    validation: (input) =>
      input.includes("System.out.println") &&
      input.includes("19164") &&
      !input.includes("\"19164\"") &&
      input.includes(";"),
    correct_output: "19164",
    error_tip: "Les nombres ne nécessitent pas de guillemets.",
    hint: "Mets simplement le nombre entre les parenthèses.",
    expected_code: "System.out.println(19164);"
  },
  {
    id: 3,
    title: "Afficher sans retour à la ligne (print)",
    prompt:
      "Utilise `System.out.print` pour afficher <span class='highlight'>A</span>, puis <span class='highlight'>B</span> sur la MÊME ligne.",
    validation: (input) =>
      input.includes('System.out.print("A")') &&
      input.includes('System.out.print("B")'),
    correct_output: "AB",
    error_tip: "Utilise `System.out.print()` pour les deux messages.",
    hint: 'Utilise `System.out.print("A"); System.out.print("B");`',
    expected_code: 'System.out.print("A");\nSystem.out.print("B");'
  },
  {
    id: 4,
    title: "Ajouter un commentaire (une ligne)",
    prompt:
      "Écris un commentaire sur une seule ligne qui dit : <span class='highlight'>Mission Critical Code</span>.",
    validation: (input) => input.includes("//Mission Critical Code"),
    correct_output: "(Succès ! Aucun affichage attendu)",
    error_tip: "Les commentaires sur une seule ligne commencent par deux slashs (//).",
    hint: "Tape `//` suivi de ton message.",
    expected_code: "// Mission Critical Code"
  },
  {
    id: 5,
    title: "Commentaires de bloc",
    prompt:
      "Écris un commentaire de bloc sur une ligne qui dit : <span class='highlight'>Important!</span>",
    validation: (input) =>
      input.includes("/*Important!*/") ||
      input.includes("/* Important! */"),
    correct_output: "(Succès ! Aucun affichage attendu)",
    error_tip: "Les commentaires de bloc utilisent /* ... */",
    hint: "Utilise `/*` au début et `*/` à la fin.",
    expected_code: "/* Important! */"
  },
  {
    id: 6,
    title: "Afficher des calculs",
    prompt: "Affiche le résultat de 15 * 3 (15 multiplié par 3).",
    validation: (input) =>
      input.includes("System.out.println") &&
      input.includes("15 * 3") &&
      input.includes(";"),
    correct_output: "45",
    error_tip: "Utilise l’astérisque (*) pour la multiplication.",
    hint: "Place l’expression mathématique complète dans println().",
    expected_code: "System.out.println(15 * 3);"
  },
  {
    id: 7,
    title: "Séquences d’échappement (nouvelle ligne)",
    prompt:
      "Affiche le message : <span class='highlight'>Line 1</span> suivi d’un retour à la ligne, puis <span class='highlight'>Line 2</span>, en utilisant une seule commande println.",
    validation: (input) => input.includes('"Line 1\\nLine 2"'),
    correct_output: "Line 1\nLine 2",
    error_tip: "La séquence de nouvelle ligne est \\n.",
    hint: 'La chaîne doit être `"Line 1\\nLine 2"`.',
    expected_code: 'System.out.println("Line 1\\nLine 2");'
  },
  {
    id: 8,
    title: "Afficher plusieurs lignes",
    prompt:
      "Affiche 'Oreo' sur la première ligne et 'Studios' sur la deuxième ligne avec deux appels séparés à println.",
    validation: (input) =>
      input.includes('println("Oreo")') &&
      input.includes('println("Studios")'),
    correct_output: "Oreo\nStudios",
    error_tip: "Chaque ligne a besoin de son propre `System.out.println()`.",
    hint: "Utilise `System.out.println()` deux fois.",
    expected_code:
      'System.out.println("Oreo");\nSystem.out.println("Studios");'
  },
  {
    id: 9,
    title: "Tabulation (séquence d’échappement)",
    prompt: "Affiche le mot 'Java' suivi d’une tabulation, puis 'Engineer'.",
    validation: (input) => input.includes('"Java\\tEngineer"'),
    correct_output: "Java\tEngineer",
    error_tip: "La séquence de tabulation est \\t.",
    hint: "La séquence de tabulation est backslash-t (`\\t`).",
    expected_code: 'System.out.println("Java\\tEngineer");'
  },
  {
    id: 10,
    title: "Guillemets dans une chaîne (échappement)",
    prompt:
      "Affiche le message : <span class='highlight'>He said, \"Run!\"</span> en utilisant la bonne séquence d’échappement.",
    validation: (input) => input.includes('"He said, \\"Run!\\""'),
    correct_output: 'He said, "Run!"',
    error_tip: "Utilise \\\" pour afficher des guillemets doubles.",
    hint: "Ajoute un backslash avant chaque guillemet que tu veux afficher.",
    expected_code: 'System.out.println("He said, \\"Run!\\"");'
  },

  // --- SECTION 2 : VARIABLES & TYPES DE BASE (11-20) ---
  {
    id: 11,
    title: "Déclarer et afficher un int",
    prompt:
      "Déclare un entier `count` et assigne-lui la valeur 15. Affiche `count`.",
    validation: (input) =>
      input.includes("int count") &&
      input.includes("15") &&
      input.includes("println(count)"),
    correct_output: "15",
    error_tip: "Utilise le mot-clé `int` pour la variable.",
    hint: "Commence par : `int count = 15;`",
    expected_code: "int count = 15;\nSystem.out.println(count);"
  },
  {
    id: 12,
    title: "Déclarer un double",
    prompt:
      "Déclare un double `pi` et assigne-lui la valeur 3.14. Affiche `pi`.",
    validation: (input) =>
      input.includes("double pi") &&
      input.includes("3.14") &&
      input.includes("println(pi)"),
    correct_output: "3.14",
    error_tip: "Les nombres à virgule flottante utilisent le type `double`.",
    hint: "Le mot-clé de type est `double`.",
    expected_code: "double pi = 3.14;\nSystem.out.println(pi);"
  },
  {
    id: 13,
    title: "Déclarer un booléen",
    prompt:
      "Déclare un booléen `isReady` et mets-le à `false`. Affiche `isReady`.",
    validation: (input) =>
      input.includes("boolean isReady") &&
      input.includes("false") &&
      input.includes("println(isReady)"),
    correct_output: "false",
    error_tip:
      "Les valeurs booléennes sont `true` ou `false` (en minuscules).",
    hint: "Le mot-clé de type est `boolean`.",
    expected_code:
      "boolean isReady = false;\nSystem.out.println(isReady);"
  },
  {
    id: 14,
    title: "Déclarer un char",
    prompt:
      "Déclare un char `initial` et mets-le à 'E'. Affiche `initial`.",
    validation: (input) =>
      input.includes("char initial") &&
      input.includes("'E'") &&
      input.includes("println(initial)"),
    correct_output: "E",
    error_tip: "Les valeurs de type char utilisent des apostrophes (').",
    hint: "Pense à utiliser des apostrophes pour les valeurs char.",
    expected_code: "char initial = 'E';\nSystem.out.println(initial);"
  },
  {
    id: 15,
    title: "Déclarer une String",
    prompt:
      'Déclare une String `city` et mets-la à "Strasbourg". Affiche `city`.',
    validation: (input) =>
      input.includes("String city") &&
      input.includes('"Strasbourg"') &&
      input.includes("println(city)"),
    correct_output: "Strasbourg",
    error_tip:
      "Le type String commence par une majuscule et utilise des guillemets doubles.",
    hint: "Le mot-clé de type est `String`.",
    expected_code:
      'String city = "Strasbourg";\nSystem.out.println(city);'
  },
  {
    id: 16,
    title: "Réaffecter une variable",
    prompt:
      "Commence avec `int x = 5;`. Réassigne `x` à 10 sur la ligne suivante. Affiche `x`.",
    validation: (input) =>
      input.includes("int x = 5") &&
      input.includes("x = 10") &&
      input.includes("println(x)"),
    correct_output: "10",
    error_tip:
      "Tu n’as besoin que du nom de la variable (`x = 10`) pour la réaffectation.",
    hint: "N’utilise pas `int` quand tu réassignes une variable existante.",
    expected_code: "int x = 5;\nx = 10;\nSystem.out.println(x);"
  },
  {
    id: 17,
    title: "Combiner l’affichage",
    prompt:
      'Étant donné `String item = "Monitor";` et `double price = 299.99;`. Affiche : "Monitor costs 299.99".',
    validation: (input) =>
      input.includes("String item") &&
      input.includes("double price") &&
      input.includes('" costs "') &&
      input.includes('item + " costs " + price'),
    correct_output: "Monitor costs 299.99",
    error_tip:
      "Utilise l’opérateur `+` pour concaténer des Strings et des variables.",
    hint:
      'Utilise : `System.out.println(item + " costs " + price);`',
    expected_code:
      'String item = "Monitor";\n' +
      "double price = 299.99;\n" +
      'System.out.println(item + " costs " + price);'
  },
  {
    id: 18,
    title: "Constantes (final)",
    prompt:
      "Déclare une constante entière nommée `MAX_SIZE` avec la valeur 256. Affiche cette constante.",
    validation: (input) =>
      input.includes("final int MAX_SIZE") &&
      input.includes("256") &&
      input.includes("println(MAX_SIZE)"),
    correct_output: "256",
    error_tip:
      "Les constantes utilisent le mot-clé `final` et sont généralement écrites en MAJUSCULES.",
    hint: "Commence par : `final int MAX_SIZE = 256;`",
    expected_code:
      "final int MAX_SIZE = 256;\nSystem.out.println(MAX_SIZE);"
  },
  {
    id: 19,
    title: "Mot-clé var",
    prompt:
      'Utilise le mot-clé `var` pour déclarer une variable `version` initialisée à la chaîne "1.21". Affiche-la.',
    validation: (input) =>
      input.includes("var version") &&
      input.includes('"1.21"') &&
      input.includes("println(version)"),
    correct_output: "1.21",
    error_tip:
      "Utilise `var` au lieu d’un type explicite (comme String) pour l’inférence de type locale.",
    hint: 'Utilise : `var version = "1.21";`',
    expected_code:
      'var version = "1.21";\nSystem.out.println(version);'
  },
  {
    id: 20,
    title: "Longueur d’une String",
    prompt:
      'Étant donné `String word = "RabbitMQ";`. Utilise une méthode de String pour afficher la longueur du mot.',
    validation: (input) =>
      input.includes("String word") &&
      input.includes("word.length()") &&
      input.includes("println"),
    correct_output: "8",
    error_tip:
      "La méthode pour obtenir la longueur est `.length()` (avec des parenthèses).",
    hint: "Utilise la méthode `.length()`.",
    expected_code:
      'String word = "RabbitMQ";\nSystem.out.println(word.length());'
  },

  // --- SECTION 3 : ARITHMÉTIQUE & OPÉRATEURS (21-35) ---
  {
    id: 21,
    title: "Opérateur d’addition (+)",
    prompt:
      "Calcule la somme de 100 + 40. Stocke-la dans un entier `sum` et affiche `sum`.",
    validation: (input) =>
      input.includes("int sum") &&
      input.includes("100 + 40") &&
      input.includes("println(sum)"),
    correct_output: "140",
    error_tip: "Utilise l’opérateur `+`.",
    hint: "La structure est : `int sum = 100 + 40;`",
    expected_code: "int sum = 100 + 40;\nSystem.out.println(sum);"
  },
  {
    id: 22,
    title: "Opérateur de soustraction (-)",
    prompt:
      "Calcule 95 moins 23. Stocke le résultat dans un entier `difference` et affiche-le.",
    validation: (input) =>
      input.includes("int difference") &&
      input.includes("95 - 23") &&
      input.includes("println(difference)"),
    correct_output: "72",
    error_tip: "Utilise l’opérateur `-`.",
    hint: "Le calcul est 95 - 23.",
    expected_code:
      "int difference = 95 - 23;\nSystem.out.println(difference);"
  },
  {
    id: 23,
    title: "Division (/) avec int",
    prompt:
      "Calcule 10 divisé par 3. Stocke le résultat dans `result` (int) et affiche-le.",
    validation: (input) =>
      input.includes("int result") &&
      input.includes("10 / 3") &&
      input.includes("println(result)"),
    correct_output: "3",
    error_tip:
      "La division entière tronque la partie décimale (elle est ignorée).",
    hint: "Utilise l’opérateur `/`.",
    expected_code:
      "int result = 10 / 3;\nSystem.out.println(result);"
  },
  {
    id: 24,
    title: "Division (/) avec double",
    prompt:
      "Calcule 10.0 divisé par 3.0. Stocke le résultat dans `result` (double) et affiche-le.",
    validation: (input) =>
      input.includes("double result") &&
      input.includes("10.0 / 3.0") &&
      input.includes("println(result)"),
    correct_output: "3.3333333333333335",
    error_tip:
      "Utilise des nombres à virgule (10.0, 3.0) pour une division précise.",
    hint: "Utilise l’opérateur `/` avec des doubles.",
    expected_code:
      "double result = 10.0 / 3.0;\nSystem.out.println(result);"
  },
  {
    id: 25,
    title: "Opérateur de multiplication (*)",
    prompt:
      "Calcule 12 * 7. Stocke le résultat dans un entier `product` et affiche-le.",
    validation: (input) =>
      input.includes("int product") &&
      input.includes("12 * 7") &&
      input.includes("println(product)"),
    correct_output: "84",
    error_tip: "Utilise l’opérateur `*`.",
    hint: "Le calcul est 12 * 7.",
    expected_code:
      "int product = 12 * 7;\nSystem.out.println(product);"
  },
  {
    id: 26,
    title: "Opérateur modulo (%)",
    prompt:
      "Calcule le reste de la division de 20 par 7. Stocke-le dans `remainder` (int) et affiche-le.",
    validation: (input) =>
      input.includes("int remainder") &&
      input.includes("20 % 7") &&
      input.includes("println(remainder)"),
    correct_output: "6",
    error_tip:
      "L’opérateur modulo est le pourcentage (%). Il renvoie le reste.",
    hint: "Le calcul est : 20 % 7;",
    expected_code:
      "int remainder = 20 % 7;\nSystem.out.println(remainder);"
  },
  {
    id: 27,
    title: "Pré-incrément (++x)",
    prompt:
      "Commence avec `int x = 5;`. Utilise l’opérateur de pré-incrément sur `x`. Affiche `x`.",
    validation: (input) =>
      input.includes("int x = 5") &&
      input.includes("++x") &&
      input.includes("println(x)"),
    correct_output: "6",
    error_tip:
      "L’opérateur de pré-incrément est `++` avant la variable.",
    hint: "Utilise `++x;` avant l’instruction d’affichage.",
    expected_code: "int x = 5;\n++x;\nSystem.out.println(x);"
  },
  {
    id: 28,
    title: "Post-décrément (x--)",
    prompt:
      "Commence avec `int y = 8;`. Utilise l’opérateur de post-décrément sur `y`. Affiche `y`.",
    validation: (input) =>
      input.includes("int y = 8") &&
      input.includes("y--") &&
      input.includes("println(y)"),
    correct_output: "7",
    error_tip:
      "L’opérateur de post-décrément est `--` après la variable.",
    hint: "Utilise `y--;` après la déclaration.",
    expected_code: "int y = 8;\ny--;\nSystem.out.println(y);"
  },
  {
    id: 29,
    title: "Addition composée (+=)",
    prompt:
      "Commence avec `int gold = 10;`. Ajoute 15 à `gold` en utilisant l’opérateur composé. Affiche `gold`.",
    validation: (input) =>
      input.includes("int gold = 10") &&
      input.includes("gold += 15") &&
      input.includes("println(gold)"),
    correct_output: "25",
    error_tip:
      "L’addition composée utilise l’opérateur `+=`.",
    hint: "Utilise : `gold += 15;`",
    expected_code:
      "int gold = 10;\ngold += 15;\nSystem.out.println(gold);"
  },
  {
    id: 30,
    title: "Soustraction composée (-=)",
    prompt:
      "Commence avec `int shield = 100;`. Soustrais 25 de `shield` avec l’opérateur composé. Affiche `shield`.",
    validation: (input) =>
      input.includes("int shield = 100") &&
      input.includes("shield -= 25") &&
      input.includes("println(shield)"),
    correct_output: "75",
    error_tip:
      "La soustraction composée utilise l’opérateur `-=`.",
    hint: "Utilise : `shield -= 25;`",
    expected_code:
      "int shield = 100;\nshield -= 25;\nSystem.out.println(shield);"
  },
  {
    id: 31,
    title: "Multiplication composée (*=)",
    prompt:
      "Commence avec `int multiplier = 5;`. Multiplie `multiplier` par 4 avec l’opérateur composé. Affiche `multiplier`.",
    validation: (input) =>
      input.includes("int multiplier = 5") &&
      input.includes("multiplier *= 4") &&
      input.includes("println(multiplier)"),
    correct_output: "20",
    error_tip:
      "La multiplication composée utilise l’opérateur `*=`.",
    hint: "Utilise : `multiplier *= 4;`",
    expected_code:
      "int multiplier = 5;\nmultiplier *= 4;\nSystem.out.println(multiplier);"
  },
  {
    id: 32,
    title: "Division composée (/=)",
    prompt:
      "Commence avec `int total = 40;`. Divise `total` par 8 avec l’opérateur composé. Affiche `total`.",
    validation: (input) =>
      input.includes("int total = 40") &&
      input.includes("total /= 8") &&
      input.includes("println(total)"),
    correct_output: "5",
    error_tip:
      "La division composée utilise l’opérateur `/=`.",
    hint: "Utilise : `total /= 8;`",
    expected_code:
      "int total = 40;\ntotal /= 8;\nSystem.out.println(total);"
  },
  {
    id: 33,
    title: "Ordre des opérations",
    prompt:
      "Calcule le résultat de 2 + 3 * 4. Stocke-le dans `result` (int) et affiche-le.",
    validation: (input) =>
      input.includes("int result") &&
      input.includes("2 + 3 * 4") &&
      input.includes("println(result)"),
    correct_output: "14",
    error_tip:
      "La multiplication est effectuée avant l’addition (priorité des opérations).",
    hint: "L’expression correspond à 2 + 12.",
    expected_code:
      "int result = 2 + 3 * 4;\nSystem.out.println(result);"
  },
  {
    id: 34,
    title: "Parenthèses en mathématiques",
    prompt:
      "Calcule le résultat de (2 + 3) * 4. Stocke-le dans `result` (int) et affiche-le.",
    validation: (input) =>
      input.includes("int result") &&
      input.includes("(2 + 3) * 4") &&
      input.includes("println(result)"),
    correct_output: "20",
    error_tip:
      "Les parenthèses forcent l’évaluation de l’expression interne en premier.",
    hint: "L’expression correspond à 5 * 4.",
    expected_code:
      "int result = (2 + 3) * 4;\nSystem.out.println(result);"
  },
  {
    id: 35,
    title: "Conversion de type (int vers double)",
    prompt:
      "Étant donné `int integerVal = 5;`. Cast-le explicitement en double, stocke-le dans `doubleVal` et affiche `doubleVal`.",
    validation: (input) =>
      input.includes("int integerVal = 5") &&
      input.includes("double doubleVal") &&
      input.includes("doubleVal = (double)integerVal") &&
      input.includes("println(doubleVal)"),
    correct_output: "5.0",
    error_tip:
      "Utilise la syntaxe de cast : `(double)variableName`.",
    hint: "La syntaxe de cast est `(double) integerVal`.",
    expected_code:
      "int integerVal = 5;\n" +
      "double doubleVal = (double)integerVal;\n" +
      "System.out.println(doubleVal);"
  },

  // --- SECTION 4 : LOGIQUE CONDITIONNELLE (36-50) ---
  {
    id: 36,
    title: "Instruction `if` simple",
    prompt:
      "Étant donné `int temp = 25;`. Si `temp` est supérieur à 20, affiche <span class='highlight'>Hot day!</span>",
    validation: (input) =>
      input.includes("int temp = 25") &&
      input.includes("if (temp > 20)") &&
      input.includes('"Hot day!"'),
    correct_output: "Hot day!",
    error_tip:
      "Utilise l’opérateur de comparaison `>` et la structure `if (condition)`.",
    hint:
      "Tu as besoin de `int temp = 25;` puis `if (temp > 20) { ... }`",
    expected_code:
      'int temp = 25;\nif (temp > 20) {\nSystem.out.println("Hot day!");\n}'
  },
  {
    id: 37,
    title: "Bloc `if-else`",
    prompt:
      "Étant donné `int speed = 50;`. Si `speed` est supérieur à 60, affiche <span class='highlight'>Too fast</span>, sinon affiche <span class='highlight'>OK speed</span>.",
    validation: (input) =>
      input.includes("int speed = 50") &&
      input.includes("if (speed > 60)") &&
      input.includes("else") &&
      input.includes('"Too fast"') &&
      input.includes('"OK speed"'),
    correct_output: "OK speed",
    error_tip:
      "N’oublie pas que le bloc `else` s’exécute lorsque la condition du `if` est fausse.",
    hint: "Le résultat vient ici du bloc `else`.",
    expected_code:
      'int speed = 50;\n' +
      "if (speed > 60) {\n" +
      'System.out.println("Too fast");\n' +
      "} else {\n" +
      'System.out.println("OK speed");\n' +
      "}"
  },
  {
    id: 38,
    title: "Opérateur d’égalité (==)",
    prompt:
      "Étant donné `int a = 7; int b = 7;`. Si `a` est égal à `b`, affiche <span class='highlight'>Match</span>.",
    validation: (input) =>
      input.includes("int a = 7") &&
      input.includes("int b = 7") &&
      input.includes("if (a == b)") &&
      input.includes('"Match"'),
    correct_output: "Match",
    error_tip:
      "L’égalité utilise le double égal (`==`).",
    hint: "La condition est `if (a == b)`.",
    expected_code:
      'int a = 7;\nint b = 7;\nif (a == b) {\nSystem.out.println("Match");\n}'
  },
  {
    id: 39,
    title: "Opérateur de différence (!=)",
    prompt:
      "Étant donné `int x = 5; int y = 6;`. Si `x` est différent de `y`, affiche <span class='highlight'>Different</span>.",
    validation: (input) =>
      input.includes("int x = 5") &&
      input.includes("int y = 6") &&
      input.includes("if (x != y)") &&
      input.includes('"Different"'),
    correct_output: "Different",
    error_tip: "La différence utilise l’opérateur `!=`.",
    hint: "La condition est `if (x != y)`.",
    expected_code:
      'int x = 5;\nint y = 6;\nif (x != y) {\nSystem.out.println("Different");\n}'
  },
  {
    id: 40,
    title: "Supérieur ou égal (>=)",
    prompt:
      "Étant donné `int level = 15;`. Si `level` est supérieur ou égal à 10, affiche <span class='highlight'>High enough</span>.",
    validation: (input) =>
      input.includes("int level = 15") &&
      input.includes("if (level >= 10)") &&
      input.includes('"High enough"'),
    correct_output: "High enough",
    error_tip: "Utilise l’opérateur `>=`.",
    hint: "La condition est `if (level >= 10)`.",
    expected_code:
      'int level = 15;\nif (level >= 10) {\nSystem.out.println("High enough");\n}'
  },
  {
    id: 41,
    title: "Inférieur ou égal (<=)",
    prompt:
      "Étant donné `int health = 40;`. Si `health` est inférieur ou égal à 50, affiche <span class='highlight'>Not Critical</span>.",
    validation: (input) =>
      input.includes("int health = 40") &&
      input.includes("if (health <= 50)") &&
      input.includes('"Not Critical"'),
    correct_output: "Not Critical",
    error_tip: "Utilise l’opérateur `<=`.",
    hint: "La condition est `if (health <= 50)`.",
    expected_code:
      'int health = 40;\nif (health <= 50) {\nSystem.out.println("Not Critical");\n}'
  },
  {
    id: 42,
    title: "ET logique (`&&`)",
    prompt:
      "Étant donné `int age = 20; boolean isStudent = true;`. Si `age` > 18 ET `isStudent` est true, affiche <span class='highlight'>Eligible</span>.",
    validation: (input) =>
      input.includes("int age = 20") &&
      input.includes("boolean isStudent = true") &&
      input.includes("if (age > 18 && isStudent)") &&
      input.includes('"Eligible"'),
    correct_output: "Eligible",
    error_tip: "L’opérateur ET logique est `&&`.",
    hint: "La condition est `if (age > 18 && isStudent)`.",
    expected_code:
      'int age = 20;\nboolean isStudent = true;\n' +
      'if (age > 18 && isStudent) {\nSystem.out.println("Eligible");\n}'
  },
  {
    id: 43,
    title: "OU logique (`||`)",
    prompt:
      'Étant donné `int score = 80; boolean perfectAttendance = false;`. Si `score` > 90 OU `perfectAttendance` est true, affiche <span class="highlight">Bonus!</span> (Dans ce cas, aucun bonus ne doit s’afficher).',
    validation: (input) =>
      input.includes("int score = 80") &&
      input.includes("boolean perfectAttendance = false") &&
      input.includes("if (score > 90 || perfectAttendance)") &&
      input.includes("Bonus!") &&
      input.includes("else"),
    correct_output: "",
    error_tip:
      "L’opérateur OU logique est `||`. Ici, la condition est fausse, donc sans bloc `else`, aucun message ne serait affiché.",
    hint:
      'La condition est `if (score > 90 || perfectAttendance) { ... }`',
    expected_code:
      "int score = 80;\n" +
      "boolean perfectAttendance = false;\n" +
      "if (score > 90 || perfectAttendance) {\n" +
      'System.out.println("Bonus!");\n' +
      "}"
  },
  {
    id: 44,
    title: "NON logique (`!`)",
    prompt:
      "Étant donné `boolean hasPower = false;`. Si `hasPower` n’est PAS true, affiche <span class='highlight'>Generator offline</span>.",
    validation: (input) =>
      input.includes("boolean hasPower = false") &&
      input.includes("if (!hasPower)") &&
      input.includes('"Generator offline"'),
    correct_output: "Generator offline",
    error_tip:
      "L’opérateur NON logique est `!` placé avant la variable / l’expression.",
    hint: "La condition est `if (!hasPower)`.",
    expected_code:
      'boolean hasPower = false;\nif (!hasPower) {\nSystem.out.println("Generator offline");\n}'
  },
  {
    id: 45,
    title: "Chaîne `if-else if-else`",
    prompt:
      "Étant donné `int day = 3;`. Si day vaut 1, affiche 'Mon' ; si day vaut 2, affiche 'Tue' ; sinon affiche 'Other day'.",
    validation: (input) =>
      input.includes("int day = 3") &&
      input.includes("if (day == 1)") &&
      input.includes("else if (day == 2)") &&
      input.includes("else") &&
      input.includes('"Other day"'),
    correct_output: "Other day",
    error_tip: "Utilise `else if` pour la condition intermédiaire.",
    hint:
      "Commence par : `if (day == 1) { ... } else if (day == 2) { ... } else { ... }`",
    expected_code:
      'int day = 3;\n' +
      "if (day == 1) {\nSystem.out.println(\"Mon\");\n} else if (day == 2) {\nSystem.out.println(\"Tue\");\n} else {\nSystem.out.println(\"Other day\");\n}"
  },
  {
    id: 46,
    title: "Comparaison de String (equals)",
    prompt:
      'Étant donné `String city = "Paris";`. Si `city` vaut "Paris", affiche <span class="highlight">Eiffel Tower</span>.',
    validation: (input) =>
      input.includes('String city = "Paris"') &&
      input.includes('city.equals("Paris")') &&
      input.includes("println"),
    correct_output: "Eiffel Tower",
    error_tip:
      "Pour comparer des Strings, utilise la méthode `.equals()` et non `==`.",
    hint: 'La condition est : `if (city.equals("Paris"))`',
    expected_code:
      'String city = "Paris";\n' +
      'if (city.equals("Paris")) {\nSystem.out.println("Eiffel Tower");\n}'
  },
  {
    id: 47,
    title: "Comparaison de String (equalsIgnoreCase)",
    prompt:
      'Étant donné `String code = "EXIT";`. Si `code` vaut "exit" (sans tenir compte de la casse), affiche <span class="highlight">Shutdown</span>.',
    validation: (input) =>
      input.includes('String code = "EXIT"') &&
      input.includes('code.equalsIgnoreCase("exit")') &&
      input.includes("println"),
    correct_output: "Shutdown",
    error_tip: "Utilise la méthode `.equalsIgnoreCase()`.",
    hint:
      'La condition est : `if (code.equalsIgnoreCase("exit"))`',
    expected_code:
      'String code = "EXIT";\n' +
      'if (code.equalsIgnoreCase("exit")) {\nSystem.out.println("Shutdown");\n}'
  },
  {
    id: 48,
    title: "Opérateur ternaire (1)",
    prompt:
      'Étant donné `int fuel = 10;`. Utilise l’opérateur ternaire pour afficher "Low" si `fuel` < 20, sinon "OK".',
    validation: (input) =>
      input.includes("int fuel = 10") &&
      input.includes('fuel < 20 ? "Low" : "OK"') &&
      input.includes("println"),
    correct_output: "Low",
    error_tip:
      "La syntaxe est `condition ? valeurSiVrai : valeurSiFaux`.",
    hint:
      'Utilise `(fuel < 20 ? "Low" : "OK")` à l’intérieur de println().',
    expected_code:
      'int fuel = 10;\nSystem.out.println(fuel < 20 ? "Low" : "OK");'
  },
  {
    id: 49,
    title: "Opérateur ternaire (2)",
    prompt:
      'Étant donné `boolean isNight = true;`. Utilise l’opérateur ternaire pour définir la variable `status` à "Sleep" si true, ou "Work" si false, puis affiche `status`.',
    validation: (input) =>
      input.includes("boolean isNight = true") &&
      input.includes("String status") &&
      input.includes('isNight ? "Sleep" : "Work"') &&
      input.includes("println(status)"),
    correct_output: "Sleep",
    error_tip:
      "Assigne le résultat de l’opération ternaire à la variable String `status`.",
    hint:
      'L’assignation doit être : `String status = isNight ? "Sleep" : "Work";`',
    expected_code:
      'boolean isNight = true;\n' +
      'String status = isNight ? "Sleep" : "Work";\n' +
      "System.out.println(status);"
  },
  {
    id: 50,
    title: "Instruction `switch` (int)",
    prompt:
      'Étant donné `int color = 2;`. Utilise un switch pour afficher "Red" si color vaut 1, ou "Blue" si color vaut 2. (Utilise un `default` pour la sécurité, mais sans rien y afficher).',
    validation: (input) =>
      input.includes("int color = 2") &&
      input.includes("switch (color)") &&
      input.includes("case 2:") &&
      input.includes('"Blue"') &&
      input.includes("break") &&
      input.includes("default:"),
    correct_output: "Blue",
    error_tip:
      "N’oublie pas d’utiliser `break;` après chaque case et d’inclure un `default`.",
    hint:
      "L’expression du switch va entre parenthèses : `switch (color)`.",
    expected_code:
      'int color = 2;\n' +
      "switch (color) {\n" +
      'case 1: System.out.println("Red"); break;\n' +
      'case 2: System.out.println("Blue"); break;\n' +
      "default: break;\n}"
  },

  // --- SECTION 5 : BOUCLES (51-65) ---
  {
    id: 51,
    title: "Boucle `for` basique",
    prompt:
      "Écris une boucle `for` qui itère 5 fois (i = 0 à i < 5). Affiche le message <span class='highlight'>Loop!</span> à l’intérieur.",
    validation: (input) =>
      input.includes("for (int i = 0; i < 5; i++)") &&
      input.includes('"Loop!"'),
    correct_output: "Loop!\nLoop!\nLoop!\nLoop!\nLoop!",
    error_tip:
      "Vérifie bien l’initialisation, la condition et l’incrément : `i = 0; i < 5; i++`.",
    hint:
      "La structure est : `for (int i = 0; i < 5; i++) { ... }`",
    expected_code:
      'for (int i = 0; i < 5; i++) {\nSystem.out.println("Loop!");\n}'
  },
  {
    id: 52,
    title: "Afficher l’index de boucle",
    prompt:
      "Écris une boucle `for` qui affiche l’index `i` de 1 jusqu’à 3 inclus.",
    validation: (input) =>
      input.includes("for (int i = 1; i <= 3; i++)") &&
      input.includes("println(i)"),
    correct_output: "1\n2\n3",
    error_tip:
      "Utilise `i <= 3` pour inclure 3, et initialise `i` à 1.",
    hint:
      "Initialise i à 1 et utilise la condition `i <= 3`.",
    expected_code:
      "for (int i = 1; i <= 3; i++) {\nSystem.out.println(i);\n}"
  },
  {
    id: 53,
    title: "Boucle `for` décroissante",
    prompt:
      "Écris une boucle `for` qui affiche les nombres de 5 à 1 (en ordre décroissant).",
    validation: (input) =>
      input.includes("for (int i = 5; i >= 1; i--") &&
      input.includes("println(i)"),
    correct_output: "5\n4\n3\n2\n1",
    error_tip:
      "Utilise `i--` pour décrémenter et `i >= 1` comme condition.",
    hint:
      "L’en-tête de la boucle doit être : `for (int i = 5; i >= 1; i--)`.",
    expected_code:
      "for (int i = 5; i >= 1; i--) {\nSystem.out.println(i);\n}"
  },
  {
    id: 54,
    title: "Boucle `while` basique",
    prompt:
      "Utilise une boucle `while` pour afficher <span class='highlight'>Run</span> 3 fois. Utilise `int count = 0;` et incrémente-le.",
    validation: (input) =>
      input.includes("int count = 0") &&
      input.includes("while (count < 3)") &&
      input.includes('"Run"') &&
      input.includes("count++"),
    correct_output: "Run\nRun\nRun",
    error_tip:
      "Pense à incrémenter le compteur dans la boucle pour éviter une boucle infinie.",
    hint:
      "Initialise count en dehors, puis `while (count < 3) { ... count++; }`",
    expected_code:
      'int count = 0;\nwhile (count < 3) {\nSystem.out.println("Run");\ncount++;\n}'
  },
  {
    id: 55,
    title: "Boucle `do-while` basique",
    prompt:
      "Utilise une boucle `do-while` pour afficher le nombre 1 une seule fois. Utilise `int x = 1;` et la condition `x < 1`.",
    validation: (input) =>
      input.includes("int x = 1") &&
      input.includes("do {") &&
      input.includes("println(x)") &&
      input.includes("} while (x < 1)"),
    correct_output: "1",
    error_tip:
      "Une boucle `do-while` s’exécute au moins une fois, même si la condition est fausse au départ.",
    hint:
      "Initialise `x` à 1. La boucle affiche 1, puis vérifie `while (x < 1)`.",
    expected_code:
      "int x = 1;\n" +
      "do {\nSystem.out.println(x);\n} while (x < 1);"
  },
  {
    id: 56,
    title: "`break` dans une boucle `for`",
    prompt:
      "Écris une boucle `for` de 1 à 10. Affiche le nombre, mais utilise `break` pour arrêter la boucle quand le nombre vaut 4.",
    validation: (input) =>
      input.includes("for (int i = 1; i <= 10; i++)") &&
      input.includes("if (i == 4)") &&
      input.includes("break;"),
    correct_output: "1\n2\n3",
    error_tip:
      "L’instruction `break` quitte immédiatement la boucle.",
    hint:
      "Dans la boucle, utilise `if (i == 4) { break; }` avant d’afficher i.",
    expected_code:
      "for (int i = 1; i <= 10; i++) {\n" +
      "if (i == 4) {\nbreak;\n}\n" +
      "System.out.println(i);\n}"
  },
  {
    id: 57,
    title: "`continue` dans une boucle `for`",
    prompt:
      "Écris une boucle `for` de 1 à 5. Utilise `continue` pour sauter l’affichage du nombre 3.",
    validation: (input) =>
      input.includes("for (int i = 1; i <= 5; i++)") &&
      input.includes("if (i == 3)") &&
      input.includes("continue;"),
    correct_output: "1\n2\n4\n5",
    error_tip:
      "L’instruction `continue` saute le reste de l’itération courante.",
    hint:
      "Utilise `if (i == 3) { continue; }` avant l’instruction d’affichage.",
    expected_code:
      "for (int i = 1; i <= 5; i++) {\n" +
      "if (i == 3) {\ncontinue;\n}\n" +
      "System.out.println(i);\n}"
  },
  {
    id: 58,
    title: "Boucles imbriquées (1)",
    prompt:
      "Utilise des boucles `for` imbriquées pour afficher <span class='highlight'>X</span> dans un carré 2x2 (4 fois au total).",
    validation: (input) =>
      input.includes("for (int i = 0; i < 2; i++)") &&
      input.includes("for (int j = 0; j < 2; j++)") &&
      input.includes('println("X")'),
    correct_output: "X\nX\nX\nX",
    error_tip:
      "Tu as besoin d’une boucle dans une autre, chacune itérant deux fois.",
    hint:
      "Les deux boucles doivent aller de 0 à 2 (exclus).",
    expected_code:
      "for (int i = 0; i < 2; i++) {\n" +
      "for (int j = 0; j < 2; j++) {\n" +
      'System.out.println("X");\n}\n}'
  },
  {
    id: 59,
    title: "Boucles imbriquées (2)",
    prompt:
      "Affiche un petit tableau de multiplication : <span class='highlight'>1 2</span>, puis un retour à la ligne, puis <span class='highlight'>2 4</span> (Utilise une seule boucle externe pour i=1 à 2, et une boucle interne pour j=1 à 2). Utilise `print` pour les nombres et `println` pour le retour à la ligne.",
    validation: (input) =>
      input.includes("for (int i = 1; i <= 2; i++)") &&
      input.includes("for (int j = 1; j <= 2; j++)") &&
      input.includes('print(i * j + " ")') &&
      input.includes("println()"),
    correct_output: "1 2 \n2 4 ",
    error_tip:
      "Utilise `print` pour garder les nombres sur la même ligne, et un `println()` vide pour passer à la suivante.",
    hint:
      'Utilise `System.out.print(i * j + " ");` dans la boucle interne, et `System.out.println();` après.',
    expected_code:
      "for (int i = 1; i <= 2; i++) {\n" +
      "for (int j = 1; j <= 2; j++) {\n" +
      'System.out.print(i * j + " ");\n}\n' +
      "System.out.println();\n}"
  },
  {
    id: 60,
    title: "Boucle `for` améliorée (tableau)",
    prompt:
      'Étant donné `String[] items = {"Sword", "Shield", "Helmet"};`. Utilise une boucle `for` améliorée pour afficher chaque élément.',
    validation: (input) =>
      input.includes('String[] items = {"Sword", "Shield", "Helmet"}') &&
      input.includes("for (String item : items)") &&
      input.includes("println(item)"),
    correct_output: "Sword\nShield\nHelmet",
    error_tip:
      "La syntaxe de la boucle améliorée est : `for (Type element : array) { ... }`",
    hint: "L’en-tête est `for (String item : items)`.",
    expected_code:
      'String[] items = {"Sword", "Cat", "Bird"};\n' +
      "for (String item : items) {\nSystem.out.println(item);\n}"
  },
  {
    id: 61,
    title: "Boucle `while` avec sentinelle",
    prompt:
      'Étant donné `int pin = 1234; int attempt = 1234;`. Utilise une boucle `while` qui continue TANT QUE `pin` est différent de `attempt`. À l’intérieur, affiche <span class="highlight">Mismatch</span>.',
    validation: (input) =>
      input.includes("int pin = 1234") &&
      input.includes("int attempt = 1234") &&
      input.includes("while (pin != attempt)") &&
      input.includes('"Mismatch"'),
    correct_output: "",
    error_tip:
      "Ici `pin` est égal à `attempt`, donc la condition est fausse dès le départ : la boucle ne s’exécute pas une seule fois.",
    hint: "La condition est `while (pin != attempt)`.",
    expected_code:
      'int pin = 1234;\nint attempt = 1234;\n' +
      'while (pin != attempt) {\nSystem.out.println("Mismatch");\n}'
  },
  {
    id: 62,
    title: "Calculer une somme dans une boucle",
    prompt:
      "Utilise une boucle `for` pour calculer la somme des nombres de 1 à 5. Affiche la somme finale `sum` (qui doit être 15).",
    validation: (input) =>
      input.includes("int sum = 0") &&
      input.includes("for (int i = 1; i <= 5; i++)") &&
      input.includes("sum = sum + i") &&
      input.includes("println(sum)"),
    correct_output: "15",
    error_tip:
      "Tu as besoin d’une variable `sum` initialisée à 0, et de `sum = sum + i;` dans la boucle.",
    hint:
      "L’instruction `println(sum)` doit être en dehors de la boucle.",
    expected_code:
      "int sum = 0;\n" +
      "for (int i = 1; i <= 5; i++) {\n" +
      "sum = sum + i;\n}\n" +
      "System.out.println(sum);"
  },
  {
    id: 63,
    title: "Boucler avec la longueur d’un tableau",
    prompt:
      "Étant donné `int[] data = {10, 20, 30};`. Utilise une boucle `for` standard pour afficher chaque élément en bouclant jusqu’à la longueur du tableau.",
    validation: (input) =>
      input.includes("int[] data") &&
      input.includes("for (int i = 0; i < data.length; i++)") &&
      input.includes("println(data[i])"),
    correct_output: "10\n20\n30",
    error_tip:
      "Accède à la longueur avec `.length` (sans parenthèses).",
    hint: "La condition de la boucle est `i < data.length`.",
    expected_code:
      "int[] data = {10, 20, 30};\n" +
      "for (int i = 0; i < data.length; i++) {\n" +
      "System.out.println(data[i]);\n}"
  },
  {
    id: 64,
    title: "Boucle `do-while` avec incrément",
    prompt:
      "Utilise une boucle `do-while` pour afficher les nombres de 2 jusqu’à, mais sans inclure, 5. Utilise `int i = 2;` et incrémente-le dans la boucle.",
    validation: (input) =>
      input.includes("int i = 2") &&
      input.includes("do {") &&
      input.includes("println(i)") &&
      input.includes("i++") &&
      input.includes("} while (i < 5)"),
    correct_output: "2\n3\n4",
    error_tip:
      "La condition doit être `i < 5` pour s’arrêter avant 5.",
    hint:
      "La boucle doit exécuter son corps une fois avant de vérifier la condition.",
    expected_code:
      "int i = 2;\n" +
      "do {\nSystem.out.println(i);\ni++;\n} while (i < 5);"
  },
  {
    id: 65,
    title: "Sauter certains multiples (continue)",
    prompt:
      "Utilise une boucle `for` de 1 à 6. Utilise `continue` pour éviter d’afficher les nombres divisibles par 2 (2, 4, 6).",
    validation: (input) =>
      input.includes("for (int i = 1; i <= 6; i++)") &&
      input.includes("if (i % 2 == 0)") &&
      input.includes("continue;") &&
      input.includes("println(i)"),
    correct_output: "1\n3\n5",
    error_tip:
      "Utilise l’opérateur modulo (`%`) pour tester la divisibilité. Si `i % 2 == 0`, utilise `continue`.",
    hint:
      "Utilise la condition `i % 2 == 0` dans le `if`.",
    expected_code:
      "for (int i = 1; i <= 6; i++) {\n" +
      "if (i % 2 == 0) {\ncontinue;\n}\n" +
      "System.out.println(i);\n}"
  },

  // --- SECTION 6 : TABLEAUX (66-75) ---
  {
    id: 66,
    title: "Initialisation de tableau (taille)",
    prompt:
      "Initialise un tableau d’entiers nommé `data` pouvant contenir 4 éléments. Affiche le premier élément (qui sera 0).",
    validation: (input) =>
      input.includes("int[] data = new int[4]") &&
      input.includes("println(data[0])"),
    correct_output: "0",
    error_tip:
      "L’initialisation utilise la syntaxe `new int[taille]`. Les index commencent à 0.",
    hint:
      "La déclaration est `int[] data = new int[4];`",
    expected_code:
      "int[] data = new int[4];\nSystem.out.println(data[0]);"
  },
  {
    id: 67,
    title: "Affecter un élément de tableau",
    prompt:
      'Étant donné `String[] names = new String[3];`. Assigne la valeur "Alice" à l’index 2. Affiche cet élément.',
    validation: (input) =>
      input.includes("String[] names = new String[3]") &&
      input.includes('names[2] = "Alice"') &&
      input.includes("println(names[2])"),
    correct_output: "Alice",
    error_tip:
      "Utilise `arrayName[index] = value;` pour assigner une valeur.",
    hint:
      "L’index 2 correspond à la troisième case du tableau.",
    expected_code:
      'String[] names = new String[3];\n' +
      'names[2] = "Alice";\n' +
      "System.out.println(names[2]);"
  },
  {
    id: 68,
    title: "Initialisation littérale de tableau",
    prompt:
      "Déclare un tableau de booléens `flags` contenant les valeurs true, false, true en utilisant la syntaxe littérale raccourcie.",
    validation: (input) =>
      input.includes("boolean[] flags = {true, false, true}") &&
      input.includes(";"),
    correct_output: "(Tableau déclaré avec succès)",
    error_tip:
      "Utilise des accolades `{}` avec des valeurs séparées par des virgules.",
    hint:
      "La déclaration raccourcie est : `boolean[] flags = { true, false, true };`",
    expected_code:
      "boolean[] flags = {true, false, true};"
  },
  {
    id: 69,
    title: "Boucler et calculer la somme d’un tableau",
    prompt:
      'Étant donné `int[] nums = {10, 20, 30};`. Utilise une boucle `for` améliorée pour calculer et afficher la somme de tous les éléments.',
    validation: (input) =>
      input.includes("int[] nums") &&
      input.includes("int total = 0") &&
      input.includes("for (int num : nums)") &&
      input.includes("total += num") &&
      input.includes("println(total)"),
    correct_output: "60",
    error_tip:
      "La variable `total` doit être initialisée à 0. Utilise `total += num;` dans la boucle.",
    hint:
      "Utilise la boucle améliorée : `for (int num : nums)`.",
    expected_code:
      "int[] nums = {10, 20, 30};\n" +
      "int total = 0;\n" +
      "for (int num : nums) {\n" +
      "total += num;\n}\n" +
      "System.out.println(total);"
  },
  {
    id: 70,
    title: "Trouver le maximum dans un tableau",
    prompt:
      'Étant donné `int[] temps = {22, 28, 15};`. Trouve et affiche la température la plus haute (28) à l’aide d’une boucle.',
    validation: (input) =>
      input.includes("int[] temps") &&
      input.includes("int max = temps[0]") &&
      input.includes("for") &&
      input.includes("if (temp > max)") &&
      input.includes("max = temp"),
    correct_output: "28",
    error_tip:
      "Commence par `max` initialisé au premier élément et itère sur les autres.",
    hint:
      "Initialise `int max = temps[0];`. Utilise une boucle améliorée et un `if` pour mettre à jour `max`.",
    expected_code:
      "int[] temps = {22, 28, 15};\n" +
      "int max = temps[0];\n" +
      "for (int temp : temps) {\n" +
      "if (temp > max) {\nmax = temp;\n}\n}\n" +
      "System.out.println(max);"
  },
  {
    id: 71,
    title: "Tableau multidimensionnel (déclaration)",
    prompt:
      "Déclare un tableau 2D d’entiers nommé `matrix` pouvant contenir 3 lignes et 2 colonnes.",
    validation: (input) =>
      input.includes("int[][] matrix = new int[3][2]") &&
      input.includes(";"),
    correct_output: "(Tableau 2D déclaré avec succès)",
    error_tip:
      "Les tableaux 2D utilisent deux paires de crochets `[][]` et deux tailles.",
    hint:
      "Utilise `int[][] matrix = new int[3][2];`",
    expected_code:
      "int[][] matrix = new int[3][2];"
  },
  {
    id: 72,
    title: "Tableau multidimensionnel (accès)",
    prompt:
      'Étant donné `int[][] grid = {{1, 2}, {3, 4}};`. Affiche la valeur de la deuxième ligne, première colonne (valeur 3).',
    validation: (input) =>
      input.includes("int[][] grid") &&
      input.includes("grid[1][0]") &&
      input.includes("println"),
    correct_output: "3",
    error_tip:
      "Les index commencent à 0. Deuxième ligne = index 1 ; première colonne = index 0.",
    hint: "L’index pour accéder à 3 est `[1][0]`.",
    expected_code:
      "int[][] grid = {{1, 2}, {3, 4}};\n" +
      "System.out.println(grid[1][0]);"
  },
  {
    id: 73,
    title: "Tableau de Strings (littéral)",
    prompt:
      'Déclare un tableau de String `names` contenant "Fred" et "George". Affiche la taille (length) du tableau.',
    validation: (input) =>
      input.includes("String[] names") &&
      input.includes('"Fred", "George"') &&
      input.includes("names.length") &&
      input.includes("println"),
    correct_output: "2",
    error_tip:
      "Utilise `.length` pour obtenir la taille du tableau.",
    hint:
      "Utilise `names.length` dans println().",
    expected_code:
      'String[] names = {"Fred", "George"};\n' +
      "System.out.println(names.length);"
  },
  {
    id: 74,
    title: "Modifier un élément de tableau",
    prompt:
      'Étant donné `int[] data = {10, 20, 30};`. Change la valeur à l’index 0 en 5. Affiche la nouvelle valeur à l’index 0.',
    validation: (input) =>
      input.includes("int[] data") &&
      input.includes("data[0] = 5") &&
      input.includes("println(data[0])"),
    correct_output: "5",
    error_tip:
      "Utilise l’opérateur d’affectation (`=`) pour modifier la valeur.",
    hint:
      "L’affectation est : `data[0] = 5;`",
    expected_code:
      "int[] data = {10, 20, 30};\n" +
      "data[0] = 5;\n" +
      "System.out.println(data[0]);"
  },
  {
    id: 75,
    title: "Boucler sur un tableau 2D",
    prompt:
      'Étant donné `int[][] matrix = {{1, 0}, {0, 1}};`. Utilise des boucles imbriquées pour afficher chaque élément.',
    validation: (input) =>
      input.includes("int[][] matrix") &&
      input.includes("for (int[] row : matrix)") &&
      input.includes("for (int val : row)") &&
      input.includes("println(val)"),
    correct_output: "1\n0\n0\n1",
    error_tip:
      "Utilise une boucle améliorée externe pour les lignes, et une interne pour les valeurs.",
    hint:
      "Boucle externe : `for (int[] row : matrix)`. Boucle interne : `for (int val : row)`.",
    expected_code:
      "int[][] matrix = {{1, 0}, {0, 1}};\n" +
      "for (int[] row : matrix) {\n" +
      "for (int val : row) {\nSystem.out.println(val);\n}\n}"
  },

  // --- SECTION 7 : MÉTHODES (76-90) ---
  {
    id: 76,
    title: "Définir une méthode (void, sans paramètres)",
    prompt:
      "Crée une méthode **public static void** nommée `launch` qui ne prend aucun argument. À l’intérieur, affiche <span class='highlight'>Rocket Launched!</span>",
    validation: (input) =>
      input.includes("public static void launch()") &&
      input.includes('"Rocket Launched!"'),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "La signature requise est `public static void launch()`.",
    hint:
      "La structure est `public static void launch() { ... }`",
    expected_code:
      'public static void launch() {\nSystem.out.println("Rocket Launched!");\n}'
  },
  {
    id: 77,
    title: "Appeler une méthode (invocation)",
    prompt:
      "Supposons qu’une méthode `public static void start()` existe. Écris la ligne de code pour l’appeler.",
    validation: (input) =>
      input.includes("start()") && input.includes(";"),
    correct_output: "(Méthode appelée)",
    error_tip:
      "Pour appeler une méthode, utilise son nom suivi de parenthèses et d’un point-virgule.",
    hint: "C’est simplement `start();`",
    expected_code: "start();"
  },
  {
    id: 78,
    title: "Méthode avec paramètres (void)",
    prompt:
      'Crée une méthode **public static void** `sayName` qui prend un paramètre String `name`. Affiche "Hello, " + `name` à l’intérieur.',
    validation: (input) =>
      input.includes("public static void sayName(String name)") &&
      input.includes('"Hello, " + name'),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "La signature est `public static void sayName(String name)`.",
    hint:
      'L’instruction d’affichage doit utiliser la concaténation : `"Hello, " + name`.',
    expected_code:
      'public static void sayName(String name) {\nSystem.out.println("Hello, " + name);\n}'
  },
  {
    id: 79,
    title: "Méthode avec retour (int)",
    prompt:
      "Crée une méthode **public static** nommée `getTen` qui renvoie la valeur entière 10.",
    validation: (input) =>
      input.includes("public static int getTen()") &&
      input.includes("return 10") &&
      input.includes(";"),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "Le type de retour doit être `int` et tu dois utiliser le mot-clé `return`.",
    hint: "La signature est `public static int getTen()`.",
    expected_code:
      "public static int getTen() {\nreturn 10;\n}"
  },
  {
    id: 80,
    title: "Méthode avec retour (double)",
    prompt:
      "Crée une méthode **public static** nommée `getTaxRate` qui renvoie la valeur double 0.05.",
    validation: (input) =>
      input.includes("public static double getTaxRate()") &&
      input.includes("return 0.05") &&
      input.includes(";"),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "Le type de retour doit être `double`.",
    hint:
      "La signature est `public static double getTaxRate()`.",
    expected_code:
      "public static double getTaxRate() {\nreturn 0.05;\n}"
  },
  {
    id: 81,
    title: "Retour de méthode & invocation",
    prompt:
      "Supposons que `public static int add(int a, int b)` existe. Appelle cette méthode avec les valeurs 5 et 3, stocke le résultat dans `sum`, puis affiche `sum`.",
    validation: (input) =>
      input.includes("int sum") &&
      input.includes("add(5, 3)") &&
      input.includes("println(sum)"),
    correct_output: "8",
    error_tip:
      "Tu dois déclarer la variable `sum` et lui assigner le résultat de l’appel de méthode.",
    hint:
      "L’appel est `sum = add(5, 3);`",
    expected_code:
      "int sum = add(5, 3);\nSystem.out.println(sum);"
  },
  {
    id: 82,
    title: "Retour de méthode (calcul)",
    prompt:
      "Crée une méthode **public static int** `multiply(int x, int y)` qui renvoie le produit de `x` et `y`.",
    validation: (input) =>
      input.includes("public static int multiply(int x, int y)") &&
      input.includes("return x * y") &&
      input.includes(";"),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "L’instruction de retour doit être `return x * y;`.",
    hint:
      "La méthode renvoie un entier, donc la signature doit utiliser `int`.",
    expected_code:
      "public static int multiply(int x, int y) {\nreturn x * y;\n}"
  },
  {
    id: 83,
    title: "Surcharge de méthodes (1)",
    prompt:
      "Crée une méthode **public static int** nommée `count(int x)` qui renvoie `x + 1`.",
    validation: (input) =>
      input.includes("public static int count(int x)") &&
      input.includes("return x + 1") &&
      input.includes(";"),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "Assure-toi que le paramètre est `int x`.",
    hint:
      "C’est une définition de méthode simple.",
    expected_code:
      "public static int count(int x) {\nreturn x + 1;\n}"
  },
  {
    id: 84,
    title: "Surcharge de méthodes (2)",
    prompt:
      "Crée une deuxième méthode **public static int** nommée `count(int x, int y)` qui renvoie `x + y`.",
    validation: (input) =>
      input.includes("public static int count(int x, int y)") &&
      input.includes("return x + y") &&
      input.includes(";"),
    correct_output: "(Définition de méthode enregistrée)",
    error_tip:
      "La surcharge de méthode signifie : même nom, paramètres différents.",
    hint:
      "Cette méthode a besoin de deux paramètres.",
    expected_code:
      "public static int count(int x, int y) {\nreturn x + y;\n}"
  },
  {
    id: 85,
    title: "Passage par valeur",
    prompt:
      "Étant donné `int start = 10;`. Crée un appel à `modify(start)` où `modify` est défini comme `public static void modify(int val) { val = 0; }`. Affiche ensuite `start`.",
    validation: (input) =>
      input.includes("int start = 10") &&
      input.includes("modify(start)") &&
      input.includes("println(start)"),
    correct_output: "10",
    error_tip:
      "Java passe les types primitifs (comme int) par valeur, donc la variable originale `start` n’est pas modifiée.",
    hint:
      "La valeur affichée doit être celle d’origine de `start`.",
    expected_code:
      "int start = 10;\nmodify(start);\nSystem.out.println(start);\npublic static void modify(int val) { val = 0; }"
  },

  // --- SECTION 8 : CLASSES & OBJETS (86-100) ---
  {
    id: 86,
    title: "Définition d’une classe",
    prompt:
      "Définis une classe publique vide nommée <span class='highlight'>GameServer</span>.",
    validation: (input) =>
      input.includes("public class GameServer {") &&
      input.includes("}"),
    correct_output: "(Définition de classe enregistrée)",
    error_tip:
      "Utilise la structure `public class NomDeClasse { ... }`.",
    hint:
      "La structure est `public class GameServer { }`",
    expected_code: "public class GameServer { }"
  },
  {
    id: 87,
    title: "Instanciation d’objet",
    prompt:
      "Supposons que la classe `Player` existe. Crée un nouvel objet de type `Player` nommé `p1`.",
    validation: (input) =>
      input.includes("Player p1") &&
      input.includes("new Player()") &&
      input.includes(";"),
    correct_output: "(Objet p1 créé)",
    error_tip:
      "Utilise le mot-clé `new` et le constructeur `Player()`.",
    hint:
      "La syntaxe est : `Player p1 = new Player();`",
    expected_code: "Player p1 = new Player();"
  },
  {
    id: 88,
    title: "Ajouter un champ (variable membre)",
    prompt:
      "À l’intérieur de la classe fournie `class User {}`, ajoute un champ entier public nommé `level` initialisé à 1.",
    validation: (input) =>
      input.includes("public class User {") &&
      input.includes("public int level = 1") &&
      input.includes(";"),
    correct_output: "(Champ ajouté)",
    error_tip:
      "Les champs sont définis dans le corps de la classe et utilisent un modificateur de visibilité.",
    hint:
      "La définition est : `public int level = 1;`",
    expected_code:
      "public class User {\npublic int level = 1;\n}"
  },
  {
    id: 89,
    title: "Accéder aux champs d’un objet",
    prompt:
      'Étant donné `class Player { public int health = 100; }` et `Player p = new Player();`. Affiche le champ `health` de l’objet `p`.',
    validation: (input) =>
      input.includes("Player p = new Player()") &&
      input.includes("println(p.health)"),
    correct_output: "100",
    error_tip:
      "Utilise l’opérateur point (`.`) pour accéder aux champs : `objet.nomDuChamp`.",
    hint:
      "L’instruction d’affichage est : `System.out.println(p.health);`",
    expected_code:
      "class Player { public int health = 100; }\n" +
      "Player p = new Player();\n" +
      "System.out.println(p.health);"
  },
  {
    id: 90,
    title: "Appeler une méthode d’objet",
    prompt:
      'Étant donné `class Item { public void inspect() { System.out.println("Inspecting"); } }` et `Item sword = new Item();`. Appelle la méthode `inspect`.',
    validation: (input) =>
      input.includes("Item sword = new Item()") &&
      input.includes("sword.inspect()") &&
      input.includes(";"),
    correct_output: "Inspecting",
    error_tip:
      "Utilise l’opérateur point pour appeler les méthodes : `objet.nomDeMethode();`.",
    hint:
      "L’appel de méthode est `sword.inspect();`",
    expected_code:
      'class Item { public void inspect() { System.out.println("Inspecting"); } }\n' +
      "Item sword = new Item();\n" +
      "sword.inspect();"
  },
  {
    id: 91,
    title: "Ajouter un constructeur (sans paramètres)",
    prompt:
      'À l’intérieur de la classe `class User {}`, ajoute un constructeur public qui affiche <span class="highlight">New User Created</span>.',
    validation: (input) =>
      input.includes("public User()") &&
      input.includes('"New User Created"'),
    correct_output: "(Constructeur ajouté)",
    error_tip:
      "Le nom du constructeur doit être identique au nom de la classe, et il n’a pas de type de retour.",
    hint:
      'La définition est : `public User() { System.out.println("New User Created"); }`',
    expected_code:
      "public class User {\n" +
      'public User() {\nSystem.out.println("New User Created");\n}\n}'
  },
  {
    id: 92,
    title: "Invocation d’un constructeur",
    prompt:
      'Supposons `class Log { public Log(String msg) { System.out.println(msg); } }`. Crée un nouvel objet `Log` en passant "Starting up..." comme argument.',
    validation: (input) =>
      input.includes('new Log("Starting up...")') &&
      input.includes(";"),
    correct_output: "Starting up...",
    error_tip:
      "L’argument doit être passé entre parenthèses lors de l’utilisation de `new`.",
    hint:
      'La syntaxe est : `new Log("Starting up...");`',
    expected_code:
      'class Log { public Log(String msg) { System.out.println(msg); } }\n' +
      'new Log("Starting up...");'
  },
  {
    id: 93,
    title: "Mot-clé `this`",
    prompt:
      'Étant donné `class Item { private String name; public Item(String name) { ... } }`. Dans le corps du constructeur, utilise `this` pour assigner le paramètre `name` au champ `name`.',
    validation: (input) =>
      input.includes("this.name = name") &&
      input.includes(";"),
    correct_output: "(Affectation réussie)",
    error_tip:
      "Utilise `this.nomDuChamp = nomDuParamètre;` pour lever l’ambiguïté.",
    hint:
      "La ligne est : `this.name = name;`",
    expected_code:
      "class Item { private String name; public Item(String name) {\nthis.name = name;\n} }"
  },
  {
    id: 94,
    title: "Champs privés",
    prompt:
      "À l’intérieur de la classe fournie `class Entity {}`, ajoute un champ entier privé nommé `id`.",
    validation: (input) =>
      input.includes("private int id") &&
      input.includes(";"),
    correct_output: "(Champ privé ajouté)",
    error_tip:
      "Utilise le modificateur d’accès `private`.",
    hint:
      "La définition est : `private int id;`",
    expected_code:
      "public class Entity {\nprivate int id;\n}"
  },
  {
    id: 95,
    title: "Méthode getter",
    prompt:
      "Étant donné `class Data { private int value = 5; }`. Crée une méthode **public int** nommée `getValue` qui renvoie le champ `value`.",
    validation: (input) =>
      input.includes("public int getValue()") &&
      input.includes("return value") &&
      input.includes(";"),
    correct_output: "(Méthode getter ajoutée)",
    error_tip:
      "Le type de retour doit être le même que celui du champ (`int`).",
    hint:
      "Le corps de la méthode est simplement `return value;`",
    expected_code:
      "class Data { private int value = 5; }\n" +
      "public int getValue() {\nreturn value;\n}"
  },

  // --- SCALABILITY FILLERS (96-100) ---
  {
    id: 96,
    title: "Méthode setter",
    prompt:
      'Étant donné `class Data { private String key; }`. Crée une méthode **public void** nommée `setKey` qui prend un paramètre String `newKey` et l’assigne à `key`.',
    validation: (input) =>
      input.includes("public void setKey(String newKey)") &&
      input.includes("key = newKey") &&
      input.includes(";"),
    correct_output: "(Méthode setter ajoutée)",
    error_tip:
      "Les méthodes setter sont généralement `void`.",
    hint:
      "Le corps de la méthode est `key = newKey;`",
    expected_code:
      "class Data { private String key; }\n" +
      "public void setKey(String newKey) {\nkey = newKey;\n}"
  },
  {
    id: 97,
    title: "Champ statique (1)",
    prompt:
      'À l’intérieur de `class Config {}`, ajoute un champ public static final String nommé `DEFAULT_ENV` initialisé à "prod".',
    validation: (input) =>
      input.includes("public static final String DEFAULT_ENV") &&
      input.includes('"prod"') &&
      input.includes(";"),
    correct_output: "(Champ statique ajouté)",
    error_tip:
      "Utilise les mots-clés `public static final`.",
    hint:
      'La définition est : `public static final String DEFAULT_ENV = "prod";`',
    expected_code:
      'public class Config {\npublic static final String DEFAULT_ENV = "prod";\n}'
  },
  {
    id: 98,
    title: "Champ statique (2) – accès",
    prompt:
      'Supposons que `Config.DEFAULT_ENV` existe et vaut "prod". Affiche la valeur de `Config.DEFAULT_ENV`.',
    validation: (input) =>
      input.includes("println(Config.DEFAULT_ENV)"),
    correct_output: "prod",
    error_tip:
      "Les champs statiques sont accessibles directement via le nom de la classe, pas via un objet.",
    hint:
      "Utilise `Config.DEFAULT_ENV` dans println().",
    expected_code:
      "System.out.println(Config.DEFAULT_ENV);"
  },
  {
    id: 99,
    title: "Appeler une méthode statique",
    prompt:
      "Supposons que tu as une méthode `startEngine()` dans une classe utilitaire `Utils`. Appelle cette méthode statique.",
    validation: (input) =>
      input.includes("Utils.startEngine()") &&
      input.includes(";"),
    correct_output: "(Méthode statique appelée)",
    error_tip:
      "Les méthodes statiques se rappellent via le nom de la classe : `NomDeClasse.nomDeMethode();`",
    hint:
      "L’appel est `Utils.startEngine();`",
    expected_code: "Utils.startEngine();"
  },
  {
    id: 100,
    title: "Révision finale",
    prompt:
      "Affiche ton nom, <span class='highlight'>Elias Saire</span>, et un petit message joyeux pour terminer le cours !",
    validation: (input) =>
      input.includes("System.out.println") &&
      input.includes('"Elias Saire"') &&
      input.includes(";"),
    correct_output: "Elias Saire",
    error_tip:
      "C’est un simple rappel de l’instruction d’affichage.",
    hint: "Reviens à la leçon 1 !",
    expected_code:
      'System.out.println("Elias Saire");'
  }
];
