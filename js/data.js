const DATA = {
  parcours: [
    {
      id: 'p1',
      emoji: '🏛',
      color: '#0D5C2E',
      colorDark: '#0A4A24',
      mode: 'mixed',
      duration: { fr: '~2h', en: '~2h', es: '~2h' },
      distance: '~4 km',
      enigmaCount: 11,
      badgeCount: 6,
      coords: { lat: 46.037, lng: -71.915 },
      name: { fr: 'Arthabaska & Nature', en: 'Arthabaska & Nature', es: 'Arthabaska y Naturaleza' },
      subtitle: {
        fr: 'Musée Laurier · Boisé des Frères · Mont Arthabaska',
        en: 'Laurier Museum · Brothers\' Forest · Mont Arthabaska',
        es: 'Museo Laurier · Bosque de los Hermanos · Mont Arthabaska'
      },
      description: {
        fr: 'Le cœur historique de Victoriaville : de la demeure de Sir Wilfrid Laurier aux sentiers boisés du Boisé des Frères et au sommet du Mont Arthabaska.',
        en: 'The historic heart of Victoriaville: from Sir Wilfrid Laurier\'s home to the forested trails of the Brothers\' Forest and the summit of Mont Arthabaska.',
        es: 'El corazón histórico de Victoriaville: desde la residencia de Sir Wilfrid Laurier hasta los senderos boscosos del Bosque de los Hermanos y la cima del Mont Arthabaska.'
      },
      badge: { emoji: '🏛', name: { fr: 'L\'Historien des Bois-Francs', en: 'The Bois-Francs Historian', es: 'El Historiador de Bois-Francs' } },
      etapes: [
        {
          id: 'p1e1',
          nom: { fr: 'Musée Laurier & Grange Fleury', en: 'Laurier Museum & Grange Fleury', es: 'Museo Laurier y Grange Fleury' },
          adresse: '16-18, rue Laurier Ouest',
          duree: '10-15 min',
          coords: { lat: 46.0372667, lng: -71.9150248 },
          histoire: {
            fr: 'Demeure victorienne de Sir Wilfrid Laurier (1876), premier Canadien français Premier ministre du Canada. La Grange Fleury adjacente est un théâtre pour enfants dans les jardins du musée.',
            en: 'Victorian home of Sir Wilfrid Laurier (1876), the first French-Canadian Prime Minister of Canada. The adjacent Grange Fleury is a children\'s theatre in the museum gardens.',
            es: 'Residencia victoriana de Sir Wilfrid Laurier (1876), el primer primer ministro canadiense francófono. La adyacente Grange Fleury es un teatro para niños en los jardines del museo.'
          },
          mission: {
            fr: 'Observez la façade principale et les jardins. Tous les indices sont à l\'extérieur !',
            en: 'Observe the main facade and the gardens. All clues are outside!',
            es: '¡Observa la fachada principal y los jardines. ¡Todas las pistas están afuera!'
          },
          bonus: {
            fr: 'Le visage de Sir Wilfrid Laurier figure sur le billet de 5 $ canadien. L\'avez-vous dans votre poche ?',
            en: 'Sir Wilfrid Laurier\'s face appears on the Canadian $5 bill. Do you have one in your pocket?',
            es: 'La cara de Sir Wilfrid Laurier aparece en el billete canadiense de $5. ¿Tienes uno en tu bolsillo?'
          },
          infos: {
            toilettes: { fr: 'Oct-mai : mer-dim 10h–16h | Juin-sept : tlj 10h–16h30', en: 'Oct-May: Wed-Sun 10am–4pm | Jun-Sep: Daily 10am–4:30pm', es: 'Oct-may: mié-dom 10h–16h | Jun-sep: todos los días 10h–16h30' },
            borne: { fr: 'Centre comm. Arthabaska, 735 boul. Bois-Francs Sud — Niv.2', en: 'Arthabaska Mall, 735 boul. Bois-Francs Sud — Level 2', es: 'Centro comercial Arthabaska, 735 boul. Bois-Francs Sud — Nivel 2' },
            parking: { fr: 'Rue Girouard ou rue Laurier — gratuit', en: 'Rue Girouard or rue Laurier — free', es: 'Calle Girouard o calle Laurier — gratuito' }
          },
          enigmes: [
            { num: 1, lettre: 'A', reponse: 4,
              question: { fr: 'Combien de fenêtres ornent le rez-de-chaussée de la façade principale ?', en: 'How many windows are on the ground floor of the main facade?', es: '¿Cuántas ventanas adornan la planta baja de la fachada principal?' },
              indice: { fr: 'Façade côté rue Laurier — comptez les fenêtres au niveau du sol.', en: 'Facade on rue Laurier side — count the ground floor windows.', es: 'Fachada del lado de la calle Laurier — cuenta las ventanas en el nivel del suelo.' }
            },
            { num: 2, lettre: 'B', reponse: 1,
              question: { fr: 'Sur la plaque commémorative, quel est le dernier chiffre de l\'année de naissance de Laurier ?', en: 'On the commemorative plaque, what is the last digit of Laurier\'s birth year?', es: 'En la placa conmemorativa, ¿cuál es el último dígito del año de nacimiento de Laurier?' },
              indice: { fr: 'La plaque officielle se trouve à l\'entrée du musée.', en: 'The official plaque is at the museum entrance.', es: 'La placa oficial está en la entrada del museo.' }
            },
            { num: 3, lettre: 'C', reponse: 4,
              question: { fr: 'Combien d\'arbres bordent le chemin d\'accès du côté gauche en entrant ?', en: 'How many trees line the driveway on the left side as you enter?', es: '¿Cuántos árboles bordean el camino de acceso por el lado izquierdo al entrar?' },
              indice: { fr: 'L\'arbre dont on tire le sirop national du Québec...', en: 'The tree from which Quebec\'s national syrup is drawn...', es: 'El árbol del que se extrae el jarabe nacional de Quebec...' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Église Saint-Christophe d\'Arthabaska', en: 'Saint-Christophe d\'Arthabaska Church', es: 'Iglesia Saint-Christophe d\'Arthabaska' }, dist: '400 m · 5 min',
            note: { fr: 'Restez sur la rue Laurier. L\'église est visible depuis le Musée.', en: 'Stay on rue Laurier. The church is visible from the Museum.', es: 'Quédate en la calle Laurier. La iglesia es visible desde el Museo.' }
          }
        },
        {
          id: 'p1e2',
          nom: { fr: 'Église Saint-Christophe', en: 'Saint-Christophe Church', es: 'Iglesia Saint-Christophe' },
          adresse: '40, rue Laurier Ouest',
          duree: '8-10 min',
          coords: { lat: 46.0336755, lng: -71.916225 },
          histoire: {
            fr: 'Construite de 1873 à 1875. Sir Wilfrid Laurier et son épouse Zoé Lafontaine s\'y sont mariés. Classée site patrimonial du Québec.',
            en: 'Built from 1873 to 1875. Sir Wilfrid Laurier and his wife Zoé Lafontaine were married here. Listed as a Quebec heritage site.',
            es: 'Construida entre 1873 y 1875. Sir Wilfrid Laurier y su esposa Zoé Lafontaine se casaron aquí. Clasificada como sitio patrimonial de Quebec.'
          },
          mission: {
            fr: 'Observez la façade et les alentours. Tout est à l\'extérieur !',
            en: 'Observe the facade and surroundings. Everything is outside!',
            es: '¡Observa la fachada y los alrededores. ¡Todo está afuera!'
          },
          bonus: {
            fr: 'Suzor-Côté — dont vous visiterez la maison ensuite — a peint plusieurs œuvres qui ornent l\'intérieur de cette église.',
            en: 'Suzor-Côté — whose house you\'ll visit next — painted several works that adorn the interior of this church.',
            es: 'Suzor-Côté, cuya casa visitarás a continuación, pintó varias obras que adornan el interior de esta iglesia.'
          },
          infos: {
            toilettes: { fr: 'Selon horaires des messes', en: 'According to mass schedules', es: 'Según horarios de misas' },
            borne: { fr: 'Centre comm. Arthabaska — 400 m', en: 'Arthabaska Mall — 400 m', es: 'Centro comercial Arthabaska — 400 m' },
            parking: { fr: 'Rue Laurier — gratuit', en: 'Rue Laurier — free', es: 'Calle Laurier — gratuito' }
          },
          enigmes: [
            { num: 4, lettre: 'D', reponse: 2,
              question: { fr: 'Combien de clochers possède l\'église ?', en: 'How many bell towers does the church have?', es: '¿Cuántos campanarios tiene la iglesia?' },
              indice: { fr: 'Reculez pour voir la façade en entier.', en: 'Step back to see the whole facade.', es: 'Retrocede para ver la fachada completa.' }
            },
            { num: 5, lettre: 'E', reponse: 21,
              question: { fr: 'La date de construction est sur la façade. Additionnez les 4 chiffres de cette année.', en: 'The construction date is on the facade. Add up the 4 digits of that year.', es: 'La fecha de construcción está en la fachada. Suma los 4 dígitos de ese año.' },
              indice: { fr: 'Les travaux se sont terminés en 1875.', en: 'Construction was completed in 1875.', es: 'La construcción se terminó en 1875.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Maison Suzor-Côté', en: 'Suzor-Côté House', es: 'Casa Suzor-Côté' }, dist: '600 m · 8 min',
            note: { fr: 'Descendez le boul. des Bois-Francs Sud vers le sud.', en: 'Head south on boul. des Bois-Francs Sud.', es: 'Dirígete al sur por el boul. des Bois-Francs Sud.' }
          }
        },
        {
          id: 'p1e3',
          nom: { fr: 'Maison Suzor-Côté', en: 'Suzor-Côté House', es: 'Casa Suzor-Côté' },
          adresse: '848, boul. des Bois-Francs Sud',
          duree: '5-8 min',
          coords: { lat: 46.0409636, lng: -71.9195191 },
          histoire: {
            fr: 'Lieu de naissance de Marc-Aurèle de Foy Suzor-Côté (1869–1937), l\'un des plus grands peintres canadiens.',
            en: 'Birthplace of Marc-Aurèle de Foy Suzor-Côté (1869–1937), one of Canada\'s greatest painters.',
            es: 'Lugar de nacimiento de Marc-Aurèle de Foy Suzor-Côté (1869–1937), uno de los más grandes pintores canadienses.'
          },
          mission: {
            fr: 'Trouvez la plaque commémorative. 5 minutes suffisent !',
            en: 'Find the commemorative plaque. 5 minutes is enough!',
            es: '¡Encuentra la placa conmemorativa. ¡5 minutos es suficiente!'
          },
          bonus: {
            fr: 'Suzor-Côté a peint plus de 2 000 œuvres. Sa toile « Vaches dans la tempête de neige » est l\'une des plus célèbres représentations de l\'hiver québécois.',
            en: 'Suzor-Côté painted over 2,000 works. His canvas "Cows in a Snowstorm" is one of the most famous depictions of a Quebec winter.',
            es: 'Suzor-Côté pintó más de 2.000 obras. Su lienzo "Vacas en una tormenta de nieve" es una de las representaciones más famosas del invierno quebequense.'
          },
          infos: {
            toilettes: { fr: '⚠️ Aucun sanitaire — utiliser le Musée Laurier avant (600 m)', en: '⚠️ No restrooms — use Laurier Museum beforehand (600 m)', es: '⚠️ Sin baños — usa el Museo Laurier antes (600 m)' },
            borne: { fr: 'Centre comm. Arthabaska — 500 m', en: 'Arthabaska Mall — 500 m', es: 'Centro comercial Arthabaska — 500 m' },
            parking: { fr: 'Boul. des Bois-Francs Sud — rue', en: 'Boul. des Bois-Francs Sud — street', es: 'Boul. des Bois-Francs Sud — calle' }
          },
          enigmes: [
            { num: 6, lettre: 'F', reponse: 6,
              question: { fr: 'Notez le chiffre des dizaines de l\'année de naissance de Suzor-Côté.', en: 'Note the tens digit of Suzor-Côté\'s birth year.', es: 'Anota el dígito de las decenas del año de nacimiento de Suzor-Côté.' },
              indice: { fr: 'Sa date de naissance figure sur la plaque commémorative.', en: 'His birth date appears on the commemorative plaque.', es: 'Su fecha de nacimiento aparece en la placa conmemorativa.' }
            },
            { num: 7, lettre: 'G', reponse: 4,
              question: { fr: 'Combien de fenêtres sur la façade principale ?', en: 'How many windows on the main facade?', es: '¿Cuántas ventanas hay en la fachada principal?' },
              indice: { fr: 'En face de l\'entrée principale.', en: 'Facing the main entrance.', es: 'Frente a la entrada principal.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Parc du Boisé des Frères du Sacré-Cœur', en: 'Brothers of the Sacred Heart Forest Park', es: 'Parque del Bosque de los Hermanos del Sagrado Corazón' }, dist: '900 m · 12 min',
            note: { fr: 'Remontez le boul. des Bois-Francs puis accès par l\'arrière de la bibliothèque Alcide-Fleury.', en: 'Head up boul. des Bois-Francs then access via the back of Alcide-Fleury library.', es: 'Sube por el boul. des Bois-Francs y accede por la parte trasera de la biblioteca Alcide-Fleury.' }
          }
        },
        {
          id: 'p1e4',
          nom: { fr: 'Parc du Boisé des Frères', en: 'Brothers\' Forest Park', es: 'Parque del Bosque de los Hermanos' },
          adresse: '841, boul. Bois-Francs Sud',
          duree: '15-20 min',
          coords: { lat: 46.04088, lng: -71.92036 },
          histoire: {
            fr: '234 000 m² de nature légués par les Frères du Sacré-Cœur (depuis 1872). Pinède, verger biologique, statues, cimetière militaire, belvédère et amphithéâtre bordant la rivière Nicolet.',
            en: '234,000 m² of nature bequeathed by the Brothers of the Sacred Heart (since 1872). Pine forest, organic orchard, statues, military cemetery, lookout and amphitheatre along the Nicolet River.',
            es: '234.000 m² de naturaleza legados por los Hermanos del Sagrado Corazón (desde 1872). Pinar, huerto biológico, estatuas, cementerio militar, mirador y anfiteatro junto al río Nicolet.'
          },
          mission: {
            fr: 'Trouvez le belvédère et le grand escalier. 15 bonnes minutes !',
            en: 'Find the lookout and the grand staircase. Allow a good 15 minutes!',
            es: '¡Encuentra el mirador y la gran escalera. ¡Necesitarás unos 15 minutos!'
          },
          bonus: {
            fr: 'Le nom "Arthabaska" vient de l\'abénaquis et signifie "là où il y a des roseaux et des herbes" — un des rares noms autochtones des Bois-Francs.',
            en: '"Arthabaska" comes from the Abenaki language and means "where there are reeds and grasses" — one of the few indigenous names in the Bois-Francs region.',
            es: '"Arthabaska" proviene del abénaquis y significa "donde hay cañas y hierbas" — uno de los pocos nombres indígenas de la región de Bois-Francs.'
          },
          infos: {
            toilettes: { fr: 'Disponibles dans le parc selon saison', en: 'Available in the park depending on season', es: 'Disponibles en el parque según la temporada' },
            borne: { fr: 'Centre comm. Arthabaska — 600 m', en: 'Arthabaska Mall — 600 m', es: 'Centro comercial Arthabaska — 600 m' },
            parking: { fr: 'Arrière bibliothèque Alcide-Fleury — gratuit', en: 'Behind Alcide-Fleury library — free', es: 'Detrás de la biblioteca Alcide-Fleury — gratuito' }
          },
          enigmes: [
            { num: 8, lettre: 'H', reponse: 0,
              question: { fr: 'Combien de marches compte le grand escalier principal ?', en: 'How many steps does the main grand staircase have?', es: '¿Cuántos peldaños tiene la gran escalera principal?' },
              indice: { fr: 'L\'escalier est le point central le plus visible du parc.', en: 'The staircase is the most visible central feature of the park.', es: 'La escalera es el punto central más visible del parque.' }
            },
            { num: 9, lettre: 'I', reponse: 0,
              question: { fr: 'Sur le panneau du verger, en quelle année les Frères ont-ils planté les premiers pommiers ? Additionnez les 4 chiffres.', en: 'On the orchard sign, what year did the Brothers plant the first apple trees? Add up the 4 digits.', es: 'En el cartel del huerto, ¿en qué año plantaron los Hermanos los primeros manzanos? Suma los 4 dígitos.' },
              indice: { fr: 'Les premiers pommiers ont été plantés entre 1881 et 1886.', en: 'The first apple trees were planted between 1881 and 1886.', es: 'Los primeros manzanos se plantaron entre 1881 y 1886.' }
            }
          ],
          transition: { mode: 'voiture', dest: { fr: 'Parc du Mont Arthabaska', en: 'Mont Arthabaska Park', es: 'Parque del Mont Arthabaska' }, dist: '1,5 km · 5 min',
            note: { fr: 'Reprenez votre véhicule. Montez au sommet — stationnement gratuit et borne au pavillon.', en: 'Back to your vehicle. Drive to the summit — free parking and charging station at the pavilion.', es: 'Vuelve a tu vehículo. Sube a la cima — estacionamiento gratuito y cargador en el pabellón.' }
          }
        },
        {
          id: 'p1e5',
          nom: { fr: 'Parc du Mont Arthabaska', en: 'Mont Arthabaska Park', es: 'Parque del Mont Arthabaska' },
          adresse: '100, chemin du Mont-Arthabaska',
          duree: '20-30 min',
          coords: { lat: 46.0379833, lng: -71.9023063 },
          histoire: {
            fr: 'Parc de 67,5 hectares culminant à 305 m. Vue panoramique sur les Appalaches. Seule étape avec marche en forêt — comptez 20 min pour le belvédère.',
            en: '67.5-hectare park reaching 305 m. Panoramic view of the Appalachians. Only stop with forest hiking — allow 20 min to the lookout.',
            es: 'Parque de 67,5 hectáreas que alcanza los 305 m. Vista panorámica de los Apalaches. Única parada con caminata por el bosque — calcula 20 min hasta el mirador.'
          },
          mission: {
            fr: 'Montez au belvédère et trouvez les panneaux d\'information.',
            en: 'Climb to the lookout and find the information panels.',
            es: 'Sube al mirador y encuentra los paneles informativos.'
          },
          bonus: {
            fr: 'Par temps clair, on peut voir jusqu\'à Montréal depuis le belvédère — à plus de 150 km !',
            en: 'On a clear day, you can see all the way to Montreal from the lookout — over 150 km away!',
            es: 'En un día despejado, ¡se puede ver hasta Montreal desde el mirador — a más de 150 km!'
          },
          infos: {
            toilettes: { fr: 'Pavillon Arthabaska — tous les jours 8h30–16h30', en: 'Arthabaska Pavilion — daily 8:30am–4:30pm', es: 'Pabellón Arthabaska — todos los días 8h30–16h30' },
            borne: { fr: 'Pavillon Mont Arthabaska — gratuite', en: 'Mont Arthabaska Pavilion — free', es: 'Pabellón Mont Arthabaska — gratuito' },
            parking: { fr: 'Sommet (chemin du Mont-Arthabaska) — gratuit', en: 'Summit (chemin du Mont-Arthabaska) — free', es: 'Cima (chemin du Mont-Arthabaska) — gratuito' }
          },
          enigmes: [
            { num: 10, lettre: 'J', reponse: 0,
              question: { fr: 'Sur le panneau au belvédère, additionnez les chiffres de l\'altitude du sommet en mètres.', en: 'On the lookout sign, add up the digits of the summit altitude in metres.', es: 'En el cartel del mirador, suma los dígitos de la altitud de la cima en metros.' },
              indice: { fr: 'Cherchez le panneau officiel du parc au point de vue (305 m).', en: 'Find the official park sign at the viewpoint (305 m).', es: 'Busca el cartel oficial del parque en el mirador (305 m).' }
            },
            { num: 11, lettre: 'K', reponse: 0,
              question: { fr: 'Combien de clochers d\'église pouvez-vous apercevoir depuis le belvédère ?', en: 'How many church steeples can you see from the lookout?', es: '¿Cuántos campanarios de iglesia se pueden ver desde el mirador?' },
              indice: { fr: 'Par beau temps, tournez-vous vers le sud-ouest.', en: 'In good weather, turn towards the southwest.', es: 'Con buen tiempo, gírate hacia el suroeste.' }
            }
          ],
          transition: { mode: 'fin', dest: { fr: 'Parcours 1 terminé !', en: 'Trail 1 complete!', es: '¡Ruta 1 completada!' }, dist: '',
            note: { fr: 'Assemblez vos chiffres A à K pour calculer les coordonnées GPS de la cache secrète.', en: 'Assemble your digits A to K to calculate the GPS coordinates of the secret cache.', es: 'Reúne tus dígitos de la A a la K para calcular las coordenadas GPS del caché secreto.' }
          }
        }
      ]
    },
    {
      id: 'p2',
      emoji: '🦢',
      color: '#085041',
      colorDark: '#053528',
      mode: 'walking',
      duration: { fr: '~1h30', en: '~1h30', es: '~1h30' },
      distance: '5,2 km',
      enigmaCount: 13,
      badgeCount: 5,
      coords: { lat: 46.0688, lng: -71.9771 },
      name: { fr: 'Tour du Réservoir Beaudet', en: 'Beaudet Reservoir Loop', es: 'Vuelta al Embalse Beaudet' },
      subtitle: {
        fr: 'Boucle complète 5,2 km · Zone importante de Conservation des Oiseaux',
        en: 'Full 5.2 km loop · Important Bird Conservation Area',
        es: 'Vuelta completa de 5,2 km · Zona importante de Conservación de Aves'
      },
      description: {
        fr: 'Une boucle de 5,2 km autour du plus beau plan d\'eau de Victoriaville. 269 espèces d\'oiseaux, tour d\'observation, pinède et barrage historique.',
        en: 'A 5.2 km loop around Victoriaville\'s most beautiful body of water. 269 bird species, observation tower, pine forest and historic dam.',
        es: 'Una vuelta de 5,2 km alrededor del cuerpo de agua más hermoso de Victoriaville. 269 especies de aves, torre de observación, pinar y represa histórica.'
      },
      badge: { emoji: '🦢', name: { fr: 'L\'Ornithologue du Beaudet', en: 'The Beaudet Ornithologist', es: 'El Ornitólogo de Beaudet' } },
      etapes: [
        {
          id: 'p2e1',
          nom: { fr: 'Pavillon & Place Elliot-Tardif', en: 'Pavilion & Elliot-Tardif Square', es: 'Pabellón y Plaza Elliot-Tardif' },
          adresse: '47, rue Garand',
          duree: '5-8 min',
          coords: { lat: 46.0688468, lng: -71.9771255 },
          histoire: {
            fr: 'Inauguré en 2013, le pavillon est le cœur du réservoir. La Place Elliot-Tardif offre des jeux d\'eau et modules pour enfants. La boucle s\'effectue en sens horaire.',
            en: 'Inaugurated in 2013, the pavilion is the heart of the reservoir. Elliot-Tardif Square offers water features and children\'s play equipment. The loop runs clockwise.',
            es: 'Inaugurado en 2013, el pabellón es el corazón del embalse. La Plaza Elliot-Tardif ofrece juegos de agua y módulos para niños. La vuelta se realiza en sentido horario.'
          },
          mission: {
            fr: 'Observez le pavillon et la Place Elliot-Tardif avant de démarrer en sens horaire.',
            en: 'Observe the pavilion and Elliot-Tardif Square before starting clockwise.',
            es: 'Observa el pabellón y la Plaza Elliot-Tardif antes de comenzar en sentido horario.'
          },
          bonus: {
            fr: 'En octobre, jusqu\'à 100 000 oies blanches s\'arrêtent sur ce réservoir lors de leur migration — le plus grand rassemblement au Canada !',
            en: 'In October, up to 100,000 snow geese stop at this reservoir during migration — the largest gathering in Canada!',
            es: '¡En octubre, hasta 100.000 gansos blancos se detienen en este embalse durante su migración — la mayor concentración de Canadá!'
          },
          infos: {
            toilettes: { fr: 'Lun-ven 12h–20h | Sam-dim 10h–18h', en: 'Mon-Fri 12pm–8pm | Sat-Sun 10am–6pm', es: 'Lun-vie 12h–20h | Sáb-dom 10h–18h' },
            borne: { fr: 'À confirmer sur place', en: 'To be confirmed on site', es: 'A confirmar en el lugar' },
            parking: { fr: 'Rue Garand — gratuit', en: 'Rue Garand — free', es: 'Calle Garand — gratuito' }
          },
          enigmes: [
            { num: 1, lettre: 'A', reponse: 3,
              question: { fr: 'En quelle année a été inauguré le pavillon ? Notez le dernier chiffre.', en: 'What year was the pavilion inaugurated? Note the last digit.', es: '¿En qué año se inauguró el pabellón? Anota el último dígito.' },
              indice: { fr: 'Consultez la plaque d\'inauguration sur le bâtiment.', en: 'Check the inauguration plaque on the building.', es: 'Consulta la placa de inauguración en el edificio.' }
            },
            { num: 2, lettre: 'B', reponse: 0,
              question: { fr: 'Combien de modules de jeux compte la Place Elliot-Tardif ?', en: 'How many play structures does Elliot-Tardif Square have?', es: '¿Cuántos módulos de juegos tiene la Plaza Elliot-Tardif?' },
              indice: { fr: 'Regardez l\'aire de jeux pour enfants juste à côté du pavillon.', en: 'Look at the children\'s play area right next to the pavilion.', es: 'Mira el área de juegos para niños justo al lado del pabellón.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Barrage & Digue', en: 'Dam & Dike', es: 'Presa y Dique' }, dist: '~800 m · ~10 min',
            note: { fr: 'Partez vers le nord-ouest en longeant la rive gauche — sens horaire.', en: 'Head northwest along the left bank — clockwise.', es: 'Dirígete al noroeste a lo largo de la orilla izquierda — en sentido horario.' }
          }
        },
        {
          id: 'p2e2',
          nom: { fr: 'Barrage & Digue historique', en: 'Historic Dam & Dike', es: 'Presa y Dique Histórico' },
          adresse: { fr: 'Côté ouest du réservoir', en: 'West side of the reservoir', es: 'Lado oeste del embalse' },
          duree: '8-10 min',
          coords: { lat: 46.072, lng: -71.981 },
          histoire: {
            fr: 'Le barrage régule le niveau du réservoir depuis sa mise en eau en 1977. La rivière Bulstrode l\'alimente. Vue saisissante sur l\'étendue du lac depuis la digue.',
            en: 'The dam has regulated the reservoir level since it was filled in 1977. The Bulstrode River feeds it. Striking view of the lake from the dike.',
            es: 'La presa ha regulado el nivel del embalse desde su llenado en 1977. El río Bulstrode lo alimenta. Vista impresionante del lago desde el dique.'
          },
          mission: {
            fr: 'Trouvez le panneau historique et observez la structure du barrage.',
            en: 'Find the historic sign and observe the dam structure.',
            es: 'Encuentra el cartel histórico y observa la estructura de la presa.'
          },
          bonus: {
            fr: 'La rivière Bulstrode qui alimente le réservoir prend sa source dans les collines au sud — elle parcourt plus de 80 km avant d\'arriver ici.',
            en: 'The Bulstrode River that feeds the reservoir originates in the hills to the south — it travels over 80 km before reaching here.',
            es: 'El río Bulstrode que alimenta el embalse nace en las colinas del sur — recorre más de 80 km antes de llegar aquí.'
          },
          infos: {
            toilettes: { fr: 'Pavillon Beaudet — 800 m vers le sud', en: 'Beaudet Pavilion — 800 m to the south', es: 'Pabellón Beaudet — 800 m al sur' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 3, lettre: 'C', reponse: 0,
              question: { fr: 'Sur le panneau historique, additionnez les 4 chiffres de l\'année de mise en eau.', en: 'On the historic sign, add the 4 digits of the year the reservoir was filled.', es: 'En el cartel histórico, suma los 4 dígitos del año en que se llenó el embalse.' },
              indice: { fr: 'Le réservoir a été créé dans les années 1970.', en: 'The reservoir was created in the 1970s.', es: 'El embalse fue creado en la década de 1970.' }
            },
            { num: 4, lettre: 'D', reponse: 0,
              question: { fr: 'Combien d\'ouvertures ou vannes compte la structure visible du barrage ?', en: 'How many openings or valves does the visible dam structure have?', es: '¿Cuántas aberturas o compuertas tiene la estructura visible de la presa?' },
              indice: { fr: 'Observez la structure du barrage depuis la digue.', en: 'Observe the dam structure from the dike.', es: 'Observa la estructura de la presa desde el dique.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Pinède — côté nord', en: 'Pine Forest — north side', es: 'Pinar — lado norte' }, dist: '~700 m · ~9 min',
            note: { fr: 'Continuez vers le nord en longeant la rive.', en: 'Continue north along the bank.', es: 'Continúa hacia el norte a lo largo de la orilla.' }
          }
        },
        {
          id: 'p2e3',
          nom: { fr: 'Pinède & Point de vue ornithologique', en: 'Pine Forest & Bird Lookout', es: 'Pinar y Mirador Ornitológico' },
          adresse: { fr: 'Côté nord du réservoir', en: 'North side of the reservoir', es: 'Lado norte del embalse' },
          duree: '8-10 min',
          coords: { lat: 46.075, lng: -71.974 },
          histoire: {
            fr: 'La pinède nord est le refuge favori des ornithologues. 269 espèces d\'oiseaux selon les saisons. Classé Zone importante de Conservation des Oiseaux du Québec.',
            en: 'The north pine forest is the favourite refuge for birdwatchers. 269 bird species depending on the season. Listed as an Important Bird Conservation Area in Quebec.',
            es: 'El pinar norte es el refugio favorito de los ornitólogos. 269 especies de aves según la temporada. Clasificado como Zona Importante de Conservación de Aves de Quebec.'
          },
          mission: {
            fr: 'Trouvez le panneau d\'interprétation ornithologique dans la pinède.',
            en: 'Find the ornithological interpretation panel in the pine forest.',
            es: 'Encuentra el panel de interpretación ornitológica en el pinar.'
          },
          bonus: {
            fr: 'Le Symposium Victo et ses oies a lieu chaque octobre — des milliers de visiteurs viennent admirer la migration des oies blanches sur ce réservoir.',
            en: 'The Victo and its Geese Symposium takes place every October — thousands of visitors come to admire the snow goose migration over this reservoir.',
            es: 'El Simposio Victo y sus gansos tiene lugar cada octubre — miles de visitantes vienen a admirar la migración de los gansos blancos en este embalse.'
          },
          infos: {
            toilettes: { fr: 'Pavillon Beaudet — 1,5 km', en: 'Beaudet Pavilion — 1.5 km', es: 'Pabellón Beaudet — 1,5 km' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 5, lettre: 'E', reponse: 2,
              question: { fr: 'Quel est le premier chiffre du nombre d\'espèces répertoriées sur le panneau ?', en: 'What is the first digit of the number of bird species listed on the sign?', es: '¿Cuál es el primer dígito del número de especies registradas en el cartel?' },
              indice: { fr: 'Plus de 250 espèces ont été recensées ici.', en: 'More than 250 species have been recorded here.', es: 'Aquí se han registrado más de 250 especies.' }
            },
            { num: 6, lettre: 'F', reponse: 0,
              question: { fr: 'Combien d\'espèces de rapaces sont mentionnées sur le panneau ?', en: 'How many raptor species are mentioned on the sign?', es: '¿Cuántas especies de rapaces se mencionan en el cartel?' },
              indice: { fr: 'Rapaces : faucons, éperviers, buses...', en: 'Raptors: falcons, hawks, buzzards...', es: 'Rapaces: halcones, gavilanes, ratoneros...' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Passerelle — côté nord', en: 'Footbridge — north side', es: 'Pasarela — lado norte' }, dist: '~400 m · ~5 min',
            note: { fr: 'Continuez vers l\'est. La passerelle traverse le nord du réservoir.', en: 'Continue east. The footbridge crosses the north of the reservoir.', es: 'Continúa hacia el este. La pasarela cruza el norte del embalse.' }
          }
        },
        {
          id: 'p2e4',
          nom: { fr: 'La Passerelle', en: 'The Footbridge', es: 'La Pasarela' },
          adresse: { fr: 'Côté nord — traversée', en: 'North side — crossing', es: 'Lado norte — cruce' },
          duree: '5-8 min',
          coords: { lat: 46.074, lng: -71.970 },
          histoire: {
            fr: 'La passerelle offre un point de vue à 360° en plein cœur du lac. Hérons, canards et martins-pêcheurs pêchent souvent à quelques mètres seulement.',
            en: 'The footbridge offers a 360° view right in the heart of the lake. Herons, ducks and kingfishers often fish just a few metres away.',
            es: 'La pasarela ofrece una vista de 360° en pleno corazón del lago. Garzas, patos y martines pescadores suelen pescar a pocos metros.'
          },
          mission: {
            fr: 'Traversez la passerelle et observez depuis le centre.',
            en: 'Cross the footbridge and observe from the centre.',
            es: 'Cruza la pasarela y observa desde el centro.'
          },
          bonus: {
            fr: 'Le grand héron bleu — ou héron cendré — peut rester immobile pendant des heures en attendant un poisson. Sa patience est légendaire !',
            en: 'The great blue heron can remain motionless for hours waiting for a fish. Its patience is legendary!',
            es: '¡La garza real puede permanecer inmóvil durante horas esperando un pez. ¡Su paciencia es legendaria!'
          },
          infos: {
            toilettes: { fr: 'Pavillon Beaudet — 1,5 km', en: 'Beaudet Pavilion — 1.5 km', es: 'Pabellón Beaudet — 1,5 km' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 7, lettre: 'G', reponse: 0,
              question: { fr: 'Combien de poteaux de soutien compte la passerelle, d\'un bout à l\'autre ?', en: 'How many support posts does the footbridge have from one end to the other?', es: '¿Cuántos postes de apoyo tiene la pasarela de un extremo al otro?' },
              indice: { fr: 'Comptez les supports verticaux en traversant.', en: 'Count the vertical supports as you cross.', es: 'Cuenta los soportes verticales mientras cruzas.' }
            },
            { num: 8, lettre: 'H', reponse: 3,
              question: { fr: 'Depuis la passerelle, dans quelle direction se trouve la tour d\'observation ? Notez le nombre de lettres du point cardinal.', en: 'From the footbridge, which direction is the observation tower? Note the number of letters in the cardinal direction.', es: 'Desde la pasarela, ¿en qué dirección está la torre de observación? Anota el número de letras del punto cardinal.' },
              indice: { fr: 'Est, Ouest, Nord ou Sud — 3 ou 4 lettres ?', en: 'East, West, North or South — 3 or 4 letters?', es: 'Este, Oeste, Norte o Sur — ¿3 o 4 letras?' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Usine d\'eau potable Hamel', en: 'Hamel Water Treatment Plant', es: 'Planta de Agua Potable Hamel' }, dist: '~600 m · ~8 min',
            note: { fr: 'Revenez vers le sud-est en longeant la rive est.', en: 'Head southeast along the east bank.', es: 'Dirígete al sureste a lo largo de la orilla este.' }
          }
        },
        {
          id: 'p2e5',
          nom: { fr: 'Usine d\'eau potable Hamel', en: 'Hamel Water Treatment Plant', es: 'Planta de Agua Potable Hamel' },
          adresse: { fr: 'Côté est du réservoir', en: 'East side of the reservoir', es: 'Lado este del embalse' },
          duree: '8-10 min',
          coords: { lat: 46.070, lng: -71.968 },
          histoire: {
            fr: 'Chaque jour, 13 millions de litres d\'eau sont filtrés ici et distribués via 355 km de conduites. Certification 5 étoiles pendant 11 années consécutives !',
            en: 'Every day, 13 million litres of water are filtered here and distributed through 355 km of pipes. 5-star certification for 11 consecutive years!',
            es: '¡Cada día, 13 millones de litros de agua se filtran aquí y se distribuyen por 355 km de tuberías. ¡Certificación de 5 estrellas durante 11 años consecutivos!'
          },
          mission: {
            fr: 'Observez la façade extérieure et lisez le panneau informatif.',
            en: 'Observe the exterior facade and read the information panel.',
            es: 'Observa la fachada exterior y lee el panel informativo.'
          },
          bonus: {
            fr: 'La présence de 269 espèces d\'oiseaux n\'affecte pas du tout la qualité de l\'eau — les procédés de filtration sont si efficaces qu\'ils éliminent tout contaminant.',
            en: 'The presence of 269 bird species has no effect on water quality — the filtration processes are so efficient they eliminate all contaminants.',
            es: 'La presencia de 269 especies de aves no afecta en absoluto la calidad del agua — los procesos de filtración son tan eficientes que eliminan todos los contaminantes.'
          },
          infos: {
            toilettes: { fr: '⚠️ Infrastructure sécurisée — pas d\'accès public', en: '⚠️ Secured infrastructure — no public access', es: '⚠️ Infraestructura segura — sin acceso público' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 9, lettre: 'I', reponse: 13,
              question: { fr: 'Combien de millions de litres d\'eau sont traités chaque jour par l\'usine Hamel ?', en: 'How many million litres of water are treated daily by the Hamel plant?', es: '¿Cuántos millones de litros de agua se tratan diariamente en la planta Hamel?' },
              indice: { fr: 'Ce chiffre impressionnant est inscrit sur le panneau informatif.', en: 'This impressive figure is on the information panel.', es: 'Esta impresionante cifra está en el panel informativo.' }
            },
            { num: 10, lettre: 'J', reponse: 5,
              question: { fr: 'Combien d\'étoiles de certification l\'usine a-t-elle obtenu ?', en: 'How many certification stars has the plant earned?', es: '¿Cuántas estrellas de certificación ha obtenido la planta?' },
              indice: { fr: 'Le programme d\'excellence récompense les meilleures usines du Québec.', en: 'The excellence program rewards the best plants in Quebec.', es: 'El programa de excelencia premia las mejores plantas de Quebec.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Tour d\'observation', en: 'Observation Tower', es: 'Torre de Observación' }, dist: '~400 m · ~5 min',
            note: { fr: 'Continuez vers le sud. La tour est visible depuis la rive est.', en: 'Continue south. The tower is visible from the east bank.', es: 'Continúa hacia el sur. La torre es visible desde la orilla este.' }
          }
        },
        {
          id: 'p2e6',
          nom: { fr: 'Tour d\'observation', en: 'Observation Tower', es: 'Torre de Observación' },
          adresse: { fr: 'Centre du réservoir Beaudet', en: 'Centre of Beaudet Reservoir', es: 'Centro del Embalse Beaudet' },
          duree: '10-12 min',
          coords: { lat: 46.068, lng: -71.973 },
          histoire: {
            fr: 'Vue à 360° sur le réservoir, la ville et le Mont Arthabaska. Ouverte 8h–21h du 1er mai au 1er novembre.',
            en: '360° view of the reservoir, the city and Mont Arthabaska. Open 8am–9pm from May 1 to November 1.',
            es: 'Vista de 360° del embalse, la ciudad y el Mont Arthabaska. Abierta de 8h a 21h del 1 de mayo al 1 de noviembre.'
          },
          mission: {
            fr: 'Montez au sommet ! Comptez soigneusement les marches.',
            en: 'Climb to the top! Count the steps carefully.',
            es: '¡Sube a la cima! Cuenta los peldaños con cuidado.'
          },
          bonus: {
            fr: 'En automne, des dizaines de milliers d\'oies blanches tourbillonnent au-dessus du réservoir — un spectacle visible depuis la tour et unique en Amérique du Nord.',
            en: 'In autumn, tens of thousands of snow geese swirl above the reservoir — a spectacle visible from the tower and unique in North America.',
            es: 'En otoño, decenas de miles de gansos blancos giran sobre el embalse — un espectáculo visible desde la torre y único en América del Norte.'
          },
          infos: {
            toilettes: { fr: 'Pavillon Beaudet — retour au départ', en: 'Beaudet Pavilion — back to start', es: 'Pabellón Beaudet — regreso al inicio' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 11, lettre: 'K', reponse: 0,
              question: { fr: 'Combien de marches pour atteindre la plateforme supérieure ?', en: 'How many steps to reach the top platform?', es: '¿Cuántos peldaños hay para llegar a la plataforma superior?' },
              indice: { fr: 'Comptez soigneusement en montant !', en: 'Count carefully as you climb!', es: '¡Cuenta con cuidado mientras subes!' }
            },
            { num: 12, lettre: 'L', reponse: 0,
              question: { fr: 'Depuis la plateforme, combien de clochers voyez-vous sur la ligne d\'horizon ?', en: 'From the platform, how many steeples can you see on the skyline?', es: 'Desde la plataforma, ¿cuántos campanarios se ven en el horizonte?' },
              indice: { fr: 'Tournez-vous vers le centre-ville au sud.', en: 'Turn towards downtown to the south.', es: 'Gírate hacia el centro de la ciudad al sur.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Volleyball & Pique-nique', en: 'Volleyball & Picnic Area', es: 'Voleibol y Área de Picnic' }, dist: '~600 m · ~8 min',
            note: { fr: 'Continuez vers le sud-ouest le long de la rive sud.', en: 'Continue southwest along the south bank.', es: 'Continúa hacia el suroeste a lo largo de la orilla sur.' }
          }
        },
        {
          id: 'p2e7',
          nom: { fr: 'Volleyball & Aire de pique-nique', en: 'Volleyball & Picnic Area', es: 'Voleibol y Área de Picnic' },
          adresse: { fr: 'Rive sud — avant retour Pavillon', en: 'South bank — before Pavilion return', es: 'Orilla sur — antes de volver al Pabellón' },
          duree: '5-8 min',
          coords: { lat: 46.066, lng: -71.977 },
          histoire: {
            fr: 'Dernière étape ! Terrain de volleyball de plage, tables de pique-nique et coffre Jeux en liberté. Méritée après 5,2 km de boucle !',
            en: 'Last stop! Beach volleyball court, picnic tables and a free play box. Well-deserved after 5.2 km!',
            es: '¡Última parada! Pista de voleibol de playa, mesas de picnic y caja de juegos libre. ¡Bien merecido después de 5,2 km!'
          },
          mission: {
            fr: 'Comptez les tables et trouvez votre dernier indice !',
            en: 'Count the tables and find your last clue!',
            es: '¡Cuenta las mesas y encuentra tu última pista!'
          },
          bonus: {
            fr: 'Vous venez de marcher 5,2 km et de découvrir une Zone importante de Conservation des Oiseaux reconnue à l\'échelle nationale. Bravo !',
            en: 'You\'ve just walked 5.2 km and discovered a nationally recognized Important Bird Conservation Area. Well done!',
            es: '¡Acabas de caminar 5,2 km y descubrir una Zona Importante de Conservación de Aves reconocida a nivel nacional. ¡Bravo!'
          },
          infos: {
            toilettes: { fr: 'Pavillon Beaudet — 200 m (retour au départ)', en: 'Beaudet Pavilion — 200 m (return to start)', es: 'Pabellón Beaudet — 200 m (regreso al inicio)' },
            borne: { fr: '—', en: '—', es: '—' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 13, lettre: 'M', reponse: 0,
              question: { fr: 'Combien de tables de pique-nique dans l\'aire de repos de la rive sud ?', en: 'How many picnic tables are in the south bank rest area?', es: '¿Cuántas mesas de picnic hay en el área de descanso de la orilla sur?' },
              indice: { fr: 'Regardez autour de vous dans l\'aire récréative.', en: 'Look around you in the recreational area.', es: 'Mira a tu alrededor en el área recreativa.' }
            }
          ],
          transition: { mode: 'fin', dest: { fr: 'Boucle complète — 5,2 km !', en: 'Full loop — 5.2 km!', es: '¡Vuelta completa — 5,2 km!' }, dist: '',
            note: { fr: 'Retour au Pavillon à 200 m. Assemblez vos chiffres A à M pour la cache !', en: 'Return to Pavilion 200 m away. Assemble digits A to M for the cache!', es: '¡Regresa al Pabellón a 200 m. Reúne los dígitos de la A a la M para el caché!' }
          }
        }
      ]
    },
    {
      id: 'p3',
      emoji: '🏙',
      color: '#1A4F7A',
      colorDark: '#123759',
      mode: 'walking',
      duration: { fr: '~1h30', en: '~1h30', es: '~1h30' },
      distance: '~2 km',
      enigmaCount: 12,
      badgeCount: 7,
      coords: { lat: 46.057, lng: -71.956 },
      name: { fr: 'Centre-ville Notre-Dame', en: 'Notre-Dame Downtown', es: 'Centro Notre-Dame' },
      subtitle: {
        fr: 'Vélogare · Ste-Victoire · Carré 150 · Cara Bloc · Fresque',
        en: 'Velogare · Ste-Victoire · Carré 150 · Cara Bloc · Mural',
        es: 'Velogare · Ste-Victoire · Carré 150 · Cara Bloc · Mural'
      },
      description: {
        fr: '7 points sur la rue Notre-Dame. Deux anciennes églises aux destins opposés — l\'une toujours active, l\'autre reconvertie en salle d\'escalade. Garez-vous une seule fois !',
        en: '7 stops on rue Notre-Dame. Two former churches with opposite destinies — one still active, the other converted into a climbing gym. Park once!',
        es: '7 puntos en la calle Notre-Dame. Dos antiguas iglesias con destinos opuestos — una todavía activa, la otra convertida en rocódromo. ¡Estaciona una sola vez!'
      },
      badge: { emoji: '🏙', name: { fr: 'L\'Urbaniste de Victoriaville', en: 'The Victoriaville Urbanist', es: 'El Urbanista de Victoriaville' } },
      etapes: [
        {
          id: 'p3e1',
          nom: { fr: 'La Vélogare du Grand-Tronc', en: 'Grand Trunk Cycling Station', es: 'Estación Ciclista del Grand-Tronc' },
          adresse: '20, rue De Bigarré',
          duree: '5-8 min',
          coords: { lat: 46.0570087, lng: -71.9585956 },
          histoire: {
            fr: 'L\'ancien chemin de fer du Grand Tronc (1854), première voie ferrée des Bois-Francs, est devenu la Route verte.',
            en: 'The former Grand Trunk Railway (1854), the first railway in Bois-Francs, is now part of the Route verte cycling network.',
            es: 'El antiguo ferrocarril del Grand Tronc (1854), la primera vía férrea de Bois-Francs, se ha convertido en la Route verte.'
          },
          mission: {
            fr: 'Panneau historique + supports à vélos. 5 minutes !',
            en: 'Historic panel + bike racks. 5 minutes!',
            es: '¡Panel histórico + soportes para bicicletas. ¡5 minutos!'
          },
          bonus: {
            fr: 'La Route verte s\'étend sur plus de 5 300 km à travers tout le Québec — le plus grand réseau cyclable en Amérique du Nord !',
            en: 'The Route verte stretches over 5,300 km across Quebec — the largest cycling network in North America!',
            es: '¡La Route verte se extiende por más de 5.300 km en todo Quebec — la red ciclista más grande de América del Norte!'
          },
          infos: {
            toilettes: { fr: '⚠️ Aucun sanitaire — Carré 150 à 5 min (Point 4)', en: '⚠️ No restrooms — Carré 150 5 min away (Stop 4)', es: '⚠️ Sin baños — Carré 150 a 5 min (Punto 4)' },
            borne: { fr: 'Stationnement De Bigarré — Niv.3, 400V, 24h/7', en: 'De Bigarré parking — Level 3, 400V, 24/7', es: 'Estacionamiento De Bigarré — Nivel 3, 400V, 24h/7' },
            parking: { fr: 'Stationnement De Bigarré — gratuit VÉ', en: 'De Bigarré parking — free EV', es: 'Estacionamiento De Bigarré — gratis VE' }
          },
          enigmes: [
            { num: 1, lettre: 'A', reponse: 18,
              question: { fr: 'Sur le panneau, additionnez les 4 chiffres de l\'année de construction du chemin de fer.', en: 'On the sign, add the 4 digits of the railway construction year.', es: 'En el cartel, suma los 4 dígitos del año de construcción del ferrocarril.' },
              indice: { fr: 'Le Grand Tronc date du milieu du XIXe siècle.', en: 'The Grand Trunk dates from the mid-19th century.', es: 'El Grand Tronc data de mediados del siglo XIX.' }
            },
            { num: 2, lettre: 'B', reponse: 0,
              question: { fr: 'Combien de supports à vélos sont installés à la Vélogare ?', en: 'How many bike racks are installed at the cycling station?', es: '¿Cuántos soportes para bicicletas hay en la estación ciclista?' },
              indice: { fr: 'Regardez au sol et contre les murs extérieurs.', en: 'Look on the ground and against the outer walls.', es: 'Mira en el suelo y contra las paredes exteriores.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Hôtel de Ville', en: 'City Hall', es: 'Ayuntamiento' }, dist: '300 m · 4 min',
            note: { fr: 'Remontez la rue De Bigarré jusqu\'à Notre-Dame, puis tournez à gauche.', en: 'Head up rue De Bigarré to Notre-Dame, then turn left.', es: 'Sube por la calle De Bigarré hasta Notre-Dame, luego gira a la izquierda.' }
          }
        },
        {
          id: 'p3e2',
          nom: { fr: 'L\'Hôtel de Ville', en: 'City Hall', es: 'El Ayuntamiento' },
          adresse: '1, rue Notre-Dame Ouest',
          duree: '5-8 min',
          coords: { lat: 46.055228, lng: -71.9600906 },
          histoire: {
            fr: 'Cœur administratif de Victoriaville depuis plus d\'un siècle. Victoriaville a été nommée en 1861 en l\'honneur de la reine Victoria d\'Angleterre.',
            en: 'Administrative heart of Victoriaville for over a century. Victoriaville was named in 1861 in honour of Queen Victoria of England.',
            es: 'Corazón administrativo de Victoriaville desde hace más de un siglo. Victoriaville fue nombrada en 1861 en honor a la reina Victoria de Inglaterra.'
          },
          mission: {
            fr: 'Façade et mâts. 5 minutes !',
            en: 'Facade and flagpoles. 5 minutes!',
            es: '¡Fachada y mástiles. ¡5 minutos!'
          },
          bonus: {
            fr: 'Victoriaville est la première ville au Québec où tous les véhicules municipaux sont électriques — un engagement vert exemplaire !',
            en: 'Victoriaville is the first city in Quebec where all municipal vehicles are electric — an exemplary green commitment!',
            es: '¡Victoriaville es la primera ciudad de Quebec donde todos los vehículos municipales son eléctricos — un compromiso verde ejemplar!'
          },
          infos: {
            toilettes: { fr: 'Lun-ven 8h30–16h30 (accès public)', en: 'Mon-Fri 8:30am–4:30pm (public access)', es: 'Lun-vie 8h30–16h30 (acceso público)' },
            borne: { fr: 'Stationnement De Bigarré — 3 min', en: 'De Bigarré parking — 3 min', es: 'Estacionamiento De Bigarré — 3 min' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 3, lettre: 'C', reponse: 1,
              question: { fr: 'Quel est le dernier chiffre du numéro civique de l\'Hôtel de Ville ?', en: 'What is the last digit of City Hall\'s civic number?', es: '¿Cuál es el último dígito del número cívico del Ayuntamiento?' },
              indice: { fr: 'Le numéro est affiché à l\'entrée principale.', en: 'The number is displayed at the main entrance.', es: 'El número está en la entrada principal.' }
            },
            { num: 4, lettre: 'D', reponse: 0,
              question: { fr: 'Combien de drapeaux sont arborés devant l\'Hôtel de Ville ?', en: 'How many flags are displayed in front of City Hall?', es: '¿Cuántas banderas hay delante del Ayuntamiento?' },
              indice: { fr: 'Levez les yeux vers les mâts !', en: 'Look up at the flagpoles!', es: '¡Mira hacia arriba, hacia los mástiles!' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Église Sainte-Victoire', en: 'Sainte-Victoire Church', es: 'Iglesia Sainte-Victoire' }, dist: '200 m · 3 min',
            note: { fr: 'Continuez sur la rue Notre-Dame Ouest. L\'église est sur votre droite.', en: 'Continue on rue Notre-Dame Ouest. The church is on your right.', es: 'Continúa por la calle Notre-Dame Ouest. La iglesia está a tu derecha.' }
          }
        },
        {
          id: 'p3e3',
          nom: { fr: 'Église Sainte-Victoire', en: 'Sainte-Victoire Church', es: 'Iglesia Sainte-Victoire' },
          adresse: '99, rue Notre-Dame Ouest',
          duree: '8-10 min',
          coords: { lat: 46.0566182, lng: -71.9622409 },
          histoire: {
            fr: 'Construite en 1897, classée site patrimonial. Considérée comme l\'une des plus belles églises du Québec — toujours active et très bien entretenue.',
            en: 'Built in 1897, listed as a heritage site. Considered one of the most beautiful churches in Quebec — still active and very well maintained.',
            es: 'Construida en 1897, clasificada como sitio patrimonial. Considerada una de las iglesias más hermosas de Quebec — todavía activa y muy bien mantenida.'
          },
          mission: {
            fr: 'Observez la façade et les détails architecturaux. Elle mérite qu\'on s\'y attarde !',
            en: 'Observe the facade and architectural details. She deserves a good look!',
            es: '¡Observa la fachada y los detalles arquitectónicos. ¡Merece que te detengas!'
          },
          bonus: {
            fr: 'Victoriaville a deux "Victoires" : la reine Victoria (1819-1901) et sainte Victoire, martyre du IIIe siècle. L\'église porte le nom de la sainte !',
            en: 'Victoriaville has two "Victories": Queen Victoria (1819-1901) and Saint Victoire, a 3rd-century martyr. The church is named after the saint!',
            es: '¡Victoriaville tiene dos "Victorias": la reina Victoria (1819-1901) y santa Victoire, mártir del siglo III. ¡La iglesia lleva el nombre de la santa!'
          },
          infos: {
            toilettes: { fr: 'Selon horaires des messes', en: 'According to mass schedules', es: 'Según horarios de misas' },
            borne: { fr: 'Stationnement De Bigarré — 5 min', en: 'De Bigarré parking — 5 min', es: 'Estacionamiento De Bigarré — 5 min' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 5, lettre: 'E', reponse: 9,
              question: { fr: 'L\'église a été construite en 1897. Quel est le chiffre des dizaines de cette année ?', en: 'The church was built in 1897. What is the tens digit of that year?', es: 'La iglesia fue construida en 1897. ¿Cuál es el dígito de las decenas de ese año?' },
              indice: { fr: 'Le 2e chiffre en partant de la droite de 1897.', en: 'The 2nd digit from the right of 1897.', es: 'El 2º dígito desde la derecha de 1897.' }
            },
            { num: 6, lettre: 'F', reponse: 0,
              question: { fr: 'Combien de colonnes ou piliers décorent la façade principale ?', en: 'How many columns or pillars decorate the main facade?', es: '¿Cuántas columnas o pilares decoran la fachada principal?' },
              indice: { fr: 'Observez la façade côté rue Notre-Dame Ouest.', en: 'Observe the facade on the rue Notre-Dame Ouest side.', es: 'Observa la fachada del lado de la calle Notre-Dame Ouest.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Carré 150 & Ruelle d\'art', en: 'Carré 150 & Art Alley', es: 'Carré 150 y Callejón de Arte' }, dist: '500 m · 6 min',
            note: { fr: 'Revenez sur vos pas et continuez vers l\'est sur la rue Notre-Dame.', en: 'Retrace your steps and continue east on rue Notre-Dame.', es: 'Regresa sobre tus pasos y continúa hacia el este por la calle Notre-Dame.' }
          }
        },
        {
          id: 'p3e4',
          nom: { fr: 'Carré 150 & Ruelle d\'art', en: 'Carré 150 & Art Alley', es: 'Carré 150 y Callejón de Arte' },
          adresse: '150, rue Notre-Dame Est',
          duree: '8-10 min',
          coords: { lat: 46.0570467, lng: -71.9556349 },
          histoire: {
            fr: 'Inauguré en 2015 pour le 150e anniversaire de Victoriaville. La ruelle derrière est une galerie d\'art à ciel ouvert avec expositions tournantes.',
            en: 'Inaugurated in 2015 for Victoriaville\'s 150th anniversary. The alley behind is an open-air art gallery with rotating exhibitions.',
            es: 'Inaugurado en 2015 para el 150 aniversario de Victoriaville. El callejón de atrás es una galería de arte al aire libre con exposiciones rotativas.'
          },
          mission: {
            fr: 'Parcourez toute la ruelle d\'art du début à la fin. 8 minutes max !',
            en: 'Walk the entire art alley from start to finish. 8 minutes max!',
            es: '¡Recorre todo el callejón de arte de principio a fin. ¡Máximo 8 minutos!'
          },
          bonus: {
            fr: 'La ruelle a accueilli l\'œuvre WASANA de Christine Sioui Wawanoloath — une mosaïque sur le thème de la réconciliation avec les peuples autochtones.',
            en: 'The alley has hosted the WASANA artwork by Christine Sioui Wawanoloath — a mosaic on the theme of reconciliation with Indigenous peoples.',
            es: 'El callejón ha acogido la obra WASANA de Christine Sioui Wawanoloath — un mosaico sobre el tema de la reconciliación con los pueblos indígenas.'
          },
          infos: {
            toilettes: { fr: 'Mar-mer 12h–17h | Jeu-ven 12h–20h | Sam 13h–17h', en: 'Tue-Wed 12pm–5pm | Thu-Fri 12pm–8pm | Sat 1pm–5pm', es: 'Mar-mié 12h–17h | Jue-vie 12h–20h | Sáb 13h–17h' },
            borne: { fr: 'Stationnement De Bigarré — 3 min', en: 'De Bigarré parking — 3 min', es: 'Estacionamiento De Bigarré — 3 min' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 7, lettre: 'G', reponse: 5,
              question: { fr: 'En quelle année le Carré 150 a-t-il été inauguré ? Notez le dernier chiffre.', en: 'What year was Carré 150 inaugurated? Note the last digit.', es: '¿En qué año se inauguró el Carré 150? Anota el último dígito.' },
              indice: { fr: 'Correspond au 150e anniversaire de Victoriaville.', en: 'Corresponds to Victoriaville\'s 150th anniversary.', es: 'Corresponde al 150 aniversario de Victoriaville.' }
            },
            { num: 8, lettre: 'H', reponse: 0,
              question: { fr: 'Dans la ruelle d\'art, combien d\'œuvres pouvez-vous compter ?', en: 'In the art alley, how many artworks can you count?', es: '¿Cuántas obras de arte puedes contar en el callejón?' },
              indice: { fr: 'Chaque panneau ou installation compte.', en: 'Each panel or installation counts.', es: 'Cada panel o instalación cuenta.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Installation des 400 mains', en: 'The 400 Hands Installation', es: 'La Instalación de las 400 Manos' }, dist: '200 m · 3 min',
            note: { fr: 'Continuez sur la rue Notre-Dame Est.', en: 'Continue on rue Notre-Dame Est.', es: 'Continúa por la calle Notre-Dame Est.' }
          }
        },
        {
          id: 'p3e5',
          nom: { fr: 'Installation des 400 mains', en: 'The 400 Hands Installation', es: 'La Instalación de las 400 Manos' },
          adresse: 'Rue Notre-Dame Est',
          duree: '5-8 min',
          coords: { lat: 46.0571, lng: -71.953 },
          histoire: {
            fr: '400+ empreintes de mains d\'enfants sur des tuiles de céramique avec les droits de l\'enfant de la Convention de l\'ONU.',
            en: '400+ children\'s handprints on ceramic tiles with the UN Convention on the Rights of the Child.',
            es: 'Más de 400 huellas de manos de niños en azulejos de cerámica con la Convención de la ONU sobre los Derechos del Niño.'
          },
          mission: {
            fr: 'Trouvez l\'installation et comptez. 5 minutes !',
            en: 'Find the installation and count. 5 minutes!',
            es: '¡Encuentra la instalación y cuenta. ¡5 minutos!'
          },
          bonus: {
            fr: 'Parmi les 400 mains, on trouve aussi celles des élus municipaux. Saurez-vous repérer les mains d\'adultes parmi celles des enfants ?',
            en: 'Among the 400 hands are also those of municipal officials. Can you spot the adult hands among the children\'s?',
            es: '¿Entre las 400 manos también están las de los concejales municipales. ¿Puedes identificar las manos de adultos entre las de los niños?'
          },
          infos: {
            toilettes: { fr: 'Carré 150 — 3 min (voir Point 4)', en: 'Carré 150 — 3 min (see Stop 4)', es: 'Carré 150 — 3 min (ver Punto 4)' },
            borne: { fr: 'Stationnement De Bigarré — 5 min', en: 'De Bigarré parking — 5 min', es: 'Estacionamiento De Bigarré — 5 min' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 9, lettre: 'I', reponse: 0,
              question: { fr: 'Combien de rangées horizontales de tuiles pouvez-vous compter ?', en: 'How many horizontal rows of tiles can you count?', es: '¿Cuántas filas horizontales de azulejos puedes contar?' },
              indice: { fr: 'Commencez par le haut et descendez jusqu\'en bas.', en: 'Start at the top and work your way down.', es: 'Empieza por arriba y baja hasta abajo.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Cara Bloc — L\'Église devenue Falaise', en: 'Cara Bloc — The Church turned Climbing Wall', es: 'Cara Bloc — La Iglesia convertida en Rocódromo' }, dist: '400 m · 5 min',
            note: { fr: 'Poursuivez sur la rue Notre-Dame Est.', en: 'Continue on rue Notre-Dame Est.', es: 'Continúa por la calle Notre-Dame Est.' }
          }
        },
        {
          id: 'p3e6',
          nom: { fr: 'Cara Bloc — L\'Église devenue Falaise', en: 'Cara Bloc — Church turned Climbing Gym', es: 'Cara Bloc — La Iglesia convertida en Rocódromo' },
          adresse: '247, rue Notre-Dame Est',
          duree: '8-10 min',
          coords: { lat: 46.0571896, lng: -71.9525534 },
          histoire: {
            fr: 'Trois vies : garage Ford (1928), église Saints-Martyrs-Canadiens (1939), centre d\'escalade Cara Bloc (2019). Destin opposé à l\'église Sainte-Victoire !',
            en: 'Three lives: Ford garage (1928), Saints-Martyrs-Canadiens church (1939), Cara Bloc climbing centre (2019). Opposite fate to Sainte-Victoire Church!',
            es: '¡Tres vidas: garaje Ford (1928), iglesia Santos-Mártires-Canadienses (1939), centro de escalada Cara Bloc (2019). ¡Destino opuesto al de la iglesia Sainte-Victoire!'
          },
          mission: {
            fr: 'Façade extérieure. L\'architecture religieuse est encore bien visible !',
            en: 'Exterior facade. The religious architecture is still clearly visible!',
            es: '¡Fachada exterior. ¡La arquitectura religiosa todavía es claramente visible!'
          },
          bonus: {
            fr: 'L\'idée de transformer une église en salle d\'escalade est une réussite remarquable de recyclage du patrimoine bâti — et les grimpeurs adorent la hauteur des voûtes !',
            en: 'The idea of converting a church into a climbing gym is a remarkable achievement in architectural heritage recycling — and climbers love the vault height!',
            es: '¡La idea de convertir una iglesia en rocódromo es un notable logro de reciclaje del patrimonio arquitectónico — y a los escaladores les encanta la altura de las bóvedas!'
          },
          infos: {
            toilettes: { fr: 'Lun-ven 12h–22h | Sam-dim 9h–18h', en: 'Mon-Fri 12pm–10pm | Sat-Sun 9am–6pm', es: 'Lun-vie 12h–22h | Sáb-dom 9h–18h' },
            borne: { fr: 'Stationnement De Bigarré — 7 min', en: 'De Bigarré parking — 7 min', es: 'Estacionamiento De Bigarré — 7 min' },
            parking: { fr: 'Stationnement 247 Notre-Dame Est — gratuit', en: '247 Notre-Dame Est parking — free', es: 'Estacionamiento 247 Notre-Dame Est — gratuito' }
          },
          enigmes: [
            { num: 10, lettre: 'J', reponse: 14,
              question: { fr: 'Multipliez le premier chiffre du numéro civique (2) par le dernier chiffre (7).', en: 'Multiply the first digit of the civic number (2) by the last digit (7).', es: 'Multiplica el primer dígito del número cívico (2) por el último dígito (7).' },
              indice: { fr: 'Un calcul simple caché dans l\'adresse du bâtiment !', en: 'A simple calculation hidden in the building\'s address!', es: '¡Un cálculo simple escondido en la dirección del edificio!' }
            },
            { num: 11, lettre: 'K', reponse: 0,
              question: { fr: 'Combien de fenêtres de style religieux peut-on compter sur la façade principale ?', en: 'How many religious-style windows (arches, ogives) are on the main facade?', es: '¿Cuántas ventanas de estilo religioso (arcos, ojivas) hay en la fachada principal?' },
              indice: { fr: 'Les formes religieuses sont encore bien visibles côté rue Notre-Dame.', en: 'Religious shapes are still clearly visible on the rue Notre-Dame side.', es: 'Las formas religiosas todavía son claramente visibles en el lado de la calle Notre-Dame.' }
            }
          ],
          transition: { mode: 'pied', dest: { fr: 'Fresque du 150e', en: '150th Anniversary Mural', es: 'Mural del 150 Aniversario' }, dist: '400 m · 5 min',
            note: { fr: 'Revenez vers l\'ouest sur la rue Notre-Dame. La fresque est visible sur un mur.', en: 'Head back west on rue Notre-Dame. The mural is visible on a wall.', es: 'Regresa al oeste por la calle Notre-Dame. El mural es visible en una pared.' }
          }
        },
        {
          id: 'p3e7',
          nom: { fr: 'La Fresque du 150e anniversaire', en: '150th Anniversary Mural', es: 'Mural del 150 Aniversario' },
          adresse: 'Rue Notre-Dame Est',
          duree: '5-8 min',
          coords: { lat: 46.057, lng: -71.956 },
          histoire: {
            fr: 'Grande fresque murale peinte pour le 150e anniversaire de Victoriaville. Illustre la vie communautaire, économique et culturelle de la ville.',
            en: 'Large mural painted for Victoriaville\'s 150th anniversary. Illustrates the community, economic and cultural life of the city.',
            es: 'Gran mural pintado para el 150 aniversario de Victoriaville. Ilustra la vida comunitaria, económica y cultural de la ciudad.'
          },
          mission: {
            fr: 'Observez la fresque dans son ensemble. Dernier indice !',
            en: 'Observe the mural as a whole. Last clue!',
            es: '¡Observa el mural en su conjunto. ¡Última pista!'
          },
          bonus: {
            fr: 'La fresque est l\'œuvre collective de plusieurs artistes locaux — un témoignage vivant de l\'histoire et de l\'identité de Victoriaville.',
            en: 'The mural is the collective work of several local artists — a living testament to the history and identity of Victoriaville.',
            es: 'El mural es la obra colectiva de varios artistas locales — un testimonio vivo de la historia y la identidad de Victoriaville.'
          },
          infos: {
            toilettes: { fr: 'Carré 150 — 5 min (voir Point 4)', en: 'Carré 150 — 5 min (see Stop 4)', es: 'Carré 150 — 5 min (ver Punto 4)' },
            borne: { fr: 'Stationnement De Bigarré — 5 min', en: 'De Bigarré parking — 5 min', es: 'Estacionamiento De Bigarré — 5 min' },
            parking: { fr: '—', en: '—', es: '—' }
          },
          enigmes: [
            { num: 12, lettre: 'L', reponse: 0,
              question: { fr: 'Sur la fresque, combien de personnages humains principaux peut-on identifier ?', en: 'On the mural, how many main human figures can you identify?', es: '¿Cuántas figuras humanas principales se pueden identificar en el mural?' },
              indice: { fr: 'Comptez uniquement les personnages clairement identifiables.', en: 'Count only clearly identifiable figures.', es: 'Cuenta solo las figuras claramente identificables.' }
            }
          ],
          transition: { mode: 'fin', dest: { fr: 'Parcours 3 terminé !', en: 'Trail 3 complete!', es: '¡Ruta 3 completada!' }, dist: '',
            note: { fr: 'Retournez au stationnement De Bigarré. Assemblez vos 12 chiffres A à L !', en: 'Return to De Bigarré parking. Assemble your 12 digits A to L!', es: '¡Regresa al estacionamiento De Bigarré. ¡Reúne tus 12 dígitos de la A a la L!' }
          }
        }
      ]
    }
  ]
};
