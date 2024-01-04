


CREATE TABLE home (
  id int unsigned primary key auto_increment not null,
  name VARCHAR (100) NOT NULL,
  numeroOffre VARCHAR (100) NOT NULL, 
  imageToUrl VARCHAR (450) NOT NULL,
  imageToUrl2 VARCHAR (450) NOT NULL,
  imageToUrl3 VARCHAR (450) NOT NULL,
  imageToUrl4 VARCHAR (450) NOT NULL,
  imageToUrl5 VARCHAR (450) NOT NULL,
  adresse VARCHAR (250) NOT NULL,
  descriptif TEXT NULL,
  disponibilite DATE NOT NULL
);



CREATE TABLE city (
  id int unsigned primary key auto_increment not null,
  city VARCHAR (100) NOT NULL,
  id_home INT UNSIGNED NOT NULL,
  CONSTRAINT fk_city_home Foreign Key (id_home) REFERENCES home(id)
);

CREATE TABLE admin (
  id int unsigned primary key auto_increment not null,
  lastname VARCHAR (100) NOT NULL,
  firstname VARCHAR (100) NOT NULL, 
  email VARCHAR (100) NOT NULL, 
  password VARCHAR (100) NOT NULL, 
  imageAdminUrl VARCHAR (450) NOT NULL,
  numberPhone VARCHAR (100) NOT NULL
);

CREATE TABLE sale(
  id int unsigned primary key auto_increment not null,
  name VARCHAR (100) NOT NULL,
  numeroOffre VARCHAR (100) NOT NULL, 
  imageToUrl VARCHAR (450) NOT NULL,
  imageToUrl2 VARCHAR (450) NOT NULL,
  imageToUrl3 VARCHAR (450) NOT NULL,
  imageToUrl4 VARCHAR (450) NOT NULL,
  imageToUrl5 VARCHAR (450) NOT NULL,
  adresse VARCHAR (250) NOT NULL,
  descriptif TEXT NULL,
  disponibilite DATE NOT NULL,
   id_home INT UNSIGNED NOT NULL,
  CONSTRAINT fk_sale_home Foreign Key (id_home) REFERENCES home(id)
);


INSERT INTO home (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite)
VALUES ("Domaine du lac", "12345", "https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPScJf~MQeTIWIvX1s_P0QuOdXad5Jpt0YFJ~Dqx8xEepk0k_hkiGic5lTybUHjlf1FhydqGnTGEBMwQJ0sU_jrXdUhAjuWm8YeOfPxrLANEzm2~hmlQmerMLpc1Q5YmGC4ypB0dINX86r85R3fRtbnQmJWbfkhx_FPiino_lxrCew_YcHQ~o0fdS6YGR_kQusaadf7h7zlESof744NH__vJ3mh6FeNuwGeoSNYyd8SWJg--.jpg", "https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPScJf~MQeTIWIvX1s_P0QuPjl0WarhTbYEZfeLQo6aO1rG0HF_j58YGMe4_epDLps0rSzmIdB_V_WTtbUIKWBUuoF3z3oXUCW1stePQrRJtC1R9jTzgowQgdFrOHT5JSBtNBRL~WABZ~Esq9iyFJzX79wMJ12kec6Vquq5Qz8Y1Ot_v4liMDl9xl4QsrK4wqI_3olJF4Zp~W7Cg5qm9XHsOKCzXNvnWhxEcx2jKgwQTig--.jpg","https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPScJf~MQeTIWIvX1s_P0QuKVN2o8NbCrPjHP9bY2WClQ~XKELYGUypBapLQAU50p_V8p1vQlzwUyrgUUkgW9woF9HzbRjJVqSX16d7tFJ7bTPk9DaPB~2rRWPxEjmOxQyw1m4GU9Fl7qzfVTNbm8NRpy0WEnjGp0MlUNngu816Wjy~c51S2eKJG~ggSkJSMFnFGbf7gzDZY8yJ9fMNZiHA~TKDVmtTZvqviZviZpUFL1Q--.jpg","https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPScJf~MQeTIWIvX1s_P0QuJ6zzu8WBYCV~jAxxul6FofsUuRLT8Mvvs9b8Y7pKbd_BNoJDd2Okb74iVdOt_0zdC62z~I6VoTfF0FnLjP1Tu13JYaYUPb198xEYc~R96EowXyk~x_JD1zgw_3fjzpE2~gXUEoD63~PNXGgi3iCbmb9Wx1~Tgype6k8yJU2up93NXi_dFLp1SJNugHYgVcp2x_~~dWfmiKzlrV6XkyYCI9A--.jpg","https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPScJf~MQeTIWIvX1s_P0QuJ4RXTuprYkN~QmhjaZO6fskCIAQglXTUesHTFlAkrQs9xca3TVWvOUusZ14ZL7AG3iz6LLjZpSbEhOGUDI4MQRzN33BojFqXN0D2qWTgADj6qFryi6akUUqnfS~RPrsL5q2ycvPmYAFIM4fVGv9SndAdue~2P3jOb1AzNE2G~8S~SGO9OFhfSii9xtPK2s_GoY2eczTh_DztKCS__m_mF9w--.jpg","8 allée de la nature 06000 NICE","Villa toute neuve, construction finie, avec vue panoramique sur la mer à Paraiso Alto, Benahavis. Emplacement privilégié sur le New Golden Mile, à proximité des terrains de golf et à quelques minutes en voiture des plages, de Puerto Banús et de Marbella.

Ce chef-d'œuvre de design et d’architecture offre à la fois intimité et une incroyable vue panoramique sur la mer depuis tous les étages, y compris le sous-sol.

Design de style contemporain dynamique, avec des formes géométriques, un concept à aire ouverte et des lignes modernes saisissantes et toutes les caractéristiques que vous attendez d’une villa de luxe. Avec sa combinaison parfaite de beauté, de style et de fonctionnalité, cette propriété est vraiment unique en son genre.

Située sur un grand terrain (1.920 m2), la maison de 750 m2 offre 6 chambres plus un appartement séparé pour le personnel ou les invités. La propriété est vendue entièrement meublée et équipée (meubles et équipements inclus dans le prix).

Le hall d’entrée avec un plafond à double hauteur de 7 mètres est incroyable et offre déjà une vue sur Gibraltar et la côte africaine. Le salon spacieux et la salle à manger ont une hauteur sous plafond supplémentaire de 3,20 mètres.

La cuisine offre une vue dégagée sur la mer et est entièrement équipée avec des appareils Gaggenau et un très grand îlot de cuisine avec hotte aspirante électrique.

À l’extérieur, nous trouvons un grand espace de terrasses (250 m2) avec zone barbecue et espace à repas entièrement équipés ; de grands espaces de détente et un immense espace chill-out avec cheminée au bioéthanol ; une spectaculaire piscine à double débordement avec cascades. Prenez un verre au bar de la piscine ou admirez le coucher de soleil sur les chaises longues.

La chambre principale privée offre un grand dressing, une salle de bain spectaculaire avec vue sur la mer depuis la douche à effet pluie et la baignoire Hoesch.

Toutes les chambres comprennent des dressings et des salles de bains modernes, avec les équipements les plus luxueux (V&B, douches à effet pluie Grohe).

Le solarium sur le toit offre une vue à 360 degrés, une autre zone barbecue entièrement équipé, jacuzzi et espace de détente.

Au sous-sol, nous trouvons une cave à vin/espace de dégustation de vin, salle de sport, spa avec sauna, home cinéma 4K ultramoderne avec des murs acoustiques, appartement pour le personnel, une autre chambre et un immense espace polyvalent à utiliser comme salle de réunion/jeux/bar.

Les 4 étages sont reliés par un ascenseur Thyssen-Krupp moderne et élégant.

Cette maison écologique est construite avec des matériaux de première qualité et des éléments décoratifs sur mesure. Elle transmet une incroyable sensation de légèreté, avec de grands espaces et un flux ininterrompu de lumière naturelle.

La propriété comprend : système domotique, arrosage automatique, alarme, interphone vidéo, chauffage au sol et climatisation dans toute la propriété, y compris au sous-sol.

Garage privé avec 5 places de stationnement.

LA PROPRIÉTÉ COMPREND :
Piscine privée à débordement
Jardin privé
Terrasses et solarium panoramiques
Ascenseur aux 4 étages
Climatisation
Chauffage par le sol
Garage (5 voitures)

SERVICES À PROXIMITÉ:
Plage: 2 minutes en voiture.
Gare routiere: moins de 5 minutes en voiture.
Une demi-douzaine de golfs à moins de 15 km.
Supermarché : moins de 5 minutes en voiture.
Ecole bilingue : moins de 5 minutes en voiture.
Estepona : 7 minutes en voiture.Vous souhaitez visiter cette résidence ?", "2024-09-12");

INSERT INTO home (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite)
VALUES ("Domaine ensoillé", "13456", "https://storage.googleapis.com/static.inmoweb.es/clients/2308/property/894450/image/golden-7--drumelia-exclusive-4.jpg","https://storage.googleapis.com/static.inmoweb.es/clients/2308/property/894450/image/golden-7--drumelia-exclusive-13.jpg","https://storage.googleapis.com/static.inmoweb.es/clients/2308/property/894450/image/golden-7--drumelia-exclusive-11.jpg","https://storage.googleapis.com/static.inmoweb.es/clients/2308/property/894450/image/golden-7--drumelia-exclusive-9.jpg","https://storage.googleapis.com/static.inmoweb.es/clients/2308/property/894450/image/golden-7--drumelia-exclusive-6.jpg","8 allée de la nature 06000 NICE","Villa de luxe à Marbella, vente
VILLA DE LUXE À NICE, VENTE
Prix: 3.786.200€
 Surface habitable 609 m²  Surface du terrain 1120 m²  Chambres 6  Salles de bain 6
 
 Presentation multimédia
villa individuelle à vendre ,
Un nouveau concept de vie de luxe dans le meilleur emplacement!
Cette incroyable villa ultramoderne à vendre au cœur du Golden Mile de NICE est parfaite pour ceux qui recherchent la qualité, le luxe et le glamour.
Situé sur un terrain de 1.120 m² et entourée de propriétés de haut de gamme similaires, cette villa contemporaine de 871 m² exposée plein sud (dont 263 m2 de terrasse et solarium) sera prête en 2023.
Grace à son style contemporain cette villa spectaculaire se démarque vraiment des autres maisons modernes en raison de ses éléments architecturaux exceptionnels et de ses caractéristiques de design d'intérieur exquises.
Elle se compose d'un hall d'entrée, un salon-salle à manger ouverte lumineuse, une cuisine entièrement équipée élégante, 4/6 chambres et 4/6 salles de bains, un débarras, un garage privé.
Les espaces de détente extérieurs, le solarium et les terrasses de 185 m² vous permettent de profiter du meilleur climat d'Europe continentale tout au long de l'année.
Une piscine avec solarium est entourée de jardins.
Cette propriété écologique et économe en énergie est proposée à la vente avec des appareils électroménagers de première classe, de grandes armoires encastrées, des portes vitrées panoramiques, une conception d'éclairage sophistiquée, la climatisation, des planchers de bois franc, etc.
Vous bénéficiez également d'une palette de couleurs neutres qui vous donne la liberté d'expérimenter avec les textiles et les accessoires.
Juste là, sur le Golden Mile privilégié où Marbella est née en tant que station balnéaire, se trouvent les résidences les plus précieuses et emblématiques d'Europe, y compris Royal.
Considérée comme l'une des meilleures adresses de France, elle a tout à portée de main: restaurants étoilés Michelin, discothèques et clubs de plage, boutiques de créateurs, hôtels emblématiques aux prestations de luxe, clubs de tennis et terrains de golf.
L'autoroute AP-7 est facilement accessible.
La vieille ville de Nice, le glamour de Puerto Banús, la vallée du golf sont à quelques minutes.Vous souhaitez visiter cette résidence ?", "2024-08-10");

INSERT INTO home (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite)
VALUES("Domaine du soleil", "12456", "https://rbplace.com/wp-content/uploads/2022/05/villa_finestrat_gm_36414.jpg", "https://rbplace.com/wp-content/uploads/2022/05/gm_36414-3.jpg", "https://rbplace.com/wp-content/uploads/2022/05/gm_36414-3.jpg", "https://rbplace.com/wp-content/uploads/2022/05/gm_36414-5.jpg","https://rbplace.com/wp-content/uploads/2022/05/gm_36414-2.jpg","8 allée de la nature 06000 NICE","
Campana Garden est un complexe résidentiel composé de différents types de maisons, dans lequel chaque maison est conçue pour tirer le meilleur parti de l’espace. Situé à Finestrat, Campana Garden propose des bungalows, des maisons mitoyennes et des villas de style moderne, avec d’excellentes qualités et des vues sur les toits de Benidorm.

Residencial Campana Bay est composé d’un bungalow, au rez-de-chaussée avec jardin, ou au dernier étage avec solarium. Toutes les maisons sont équipées de conduits d’aération et d’une cuisine équipée intégrée dans le séjour. Parmi ses espaces communs, plusieurs jardins avec piscine et terrains de sport se distinguent.

Anamar – Blue est un complexe résidentiel composé de villas avec ou sans sous-sol, au design avant-gardiste et fonctionnel, dans lequel chaque détail a été soigné. Les maisons ont 3 chambres et 2 salles de bain, un solarium de plus de 100 mètres, une terrasse et un jardin avec parking et piscine privée.

Les Green Villas, aux lignes modernes, sont réparties sur deux étages spacieux avec un total de 3 chambres et 3 salles de bains, une cuisine intégrée dans le salon et une grande terrasse à l’étage supérieur.
Ils disposent également d’un parking et d’un grand jardin privé avec possibilité de piscine. Le modèle New Green comprend également une maison d’amis sur le terrain, avec une chambre et une salle de bain complète.

View Premium est composé de villas individuelles conçues sur deux étages, avec un grand sous-sol inclus, sur des parcelles de plus de 450 mètres. Les maisons disposent de 3 chambres et 3 salles de bains, d’un solarium privé, d’un sous-sol avec patio à l’anglaise et d’un jardin avec parking et piscine privée.

Les Villas Orange, pour leur part, ont de grands terrains et une distribution sur trois étages plus un solarium, avec 4 chambres et 5 salles de bains, un demi sous-sol, un ascenseur et d’excellentes vues panoramiques sur la mer.

Vous souhaitez visiter cette résidence ? ","2024-12-08");

INSERT INTO home (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite)
VALUES ("Domaine étoilé", "12356","https://rbplace.com/wp-content/uploads/2023/09/villa_domaine_etoile_mijas.jpg","https://rbplace.com/wp-content/uploads/2023/09/domaine_etoile-1.jpg","https://rbplace.com/wp-content/uploads/2022/07/gm_36405-2.jpg","https://rbplace.com/wp-content/uploads/2023/06/gm_36407-4.jpg","https://rbplace.com/wp-content/uploads/2023/06/gm_36407-1.jpg","8 allée de la nature 06000 NICE","maginez-vous réveiller chaque matin avec le doux murmure de la mer Méditerranée. Bienvenue au Domaine Étoilé, un havre de paix où la mer rencontre le ciel. Situé sur la magnifique Costa del Sol en Espagne, ce programme de villas est un véritable bijou.

Nouvelle Construction : Prix à partir de 1’490,000 à € 1’690,000 €. [Lits : 3 – 3] [Bains : 3 – 3] [surface construite : 296.00 m² – m² 340.00]

Nichées à Mijas-Costa, face à la plage, trois villas indépendantes se dressent fièrement. Ces résidences bénéficient d’un emplacement privilégié avec un accès direct à la plage, promesse d’instants inoubliables.

Lumineuses et spacieuses, ces villas neuves sont chacune érigées sur leur propre parcelle, dotées d’un jardin fleuri et d’une piscine à la chlorination saline. Leur design intérieur, moderne et aux tons neutres, attend vos touches personnelles.

Conçues dans un esprit méditerranéen, ces villas possèdent de vastes terrasses, vous invitant à savourer les 320 jours de soleil annuels offerts par la Costa del Sol.

Détails des Villas :

Rez-de-chaussée : Un grand espace ouvert élégant et fonctionnel, combinant salon, salle à manger et cuisine. Et une chambre avec salle de bain attenante.
Premier étage : 2 chambres spacieuses avec salles de bains attenantes et terrasses.
Terrasse : Une pergola protectrice et un vaste solarium.
Sous-sol : Places de parking, deux pièces polyvalentes, un toilette et un accès à la villa par un ascenseur privé.
Caractéristiques :

Catégorie : Front de mer, Luxe, Nouvelle construction
Climatisation : Chaude et froide, chauffage au sol dans toute la maison et salles de bains
État : Neuf
Équipements : Terrasse couverte, ascenseur, placards intégrés, terrasse privée, solarium, buanderie, salle de bains attenante, sous-sol
Mobilier : Partiellement meublé
Jardin : Privé et paysagé
Cuisine : Entièrement équipée, ouverte sur le salon
Orientation : Sud
Parking : Souterrain, garage, plusieurs places, privé
Piscine : Privée
Localisation : Campagne, à proximité des écoles, urbanisation
Sécurité : Complexe sécurisé, volets électriques, interphone, système d’alarme, coffre-fort
Utilitaires : Électricité, eau potable, téléphone
Vues : Mer, plage, piscine
Au Domaine Étoilé, chaque jour est une invitation à vivre le rêve méditerranéen. Faites de ce rêve votre réalité.","2024-05-30");




INSERT INTO sale (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite,id_home )
VALUES ("Domaine de la lune", "AHBGF","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1586/Photos00058.jpg?width=1440&q=65&func=crop","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1600/Photos00086.jpg?width=562&height=348&q=65", "https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1577/Photos00030.jpg?width=1440&q=65","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1586/Photos00058.jpg?width=1440&q=65&func=crop","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1603/Photos00093.jpg?width=1440&q=65","8 rue de la lune, Saint tropez", "Domaine de la lune

Saint tropez,
Côte d'Azur,
France
14 voyageurs·7 chambres·7 salles de bain·500 m²
Tout en verre et en béton, la villa Hanoï se dresse au milieu d’un immense terrain au gazon parfaitement taillé. Sur la terrasse qui fait face à la mer, les parasols design et les transats rose chamallow rappellent les hôtels d’Ocean Drive. A l’intérieur, l’espace entièrement vitré et les murs immaculés mettent en valeur la décoration épurée, subtilement twistée par les meubles de designers, les touches de couleurs pop et la lumière des néons. Dans le salon, la table rose bonbon et un tableau d’art contemporain multicolore apportent du peps à la cuisine minimaliste. Des tapis turquoise, fuchsia ou vert pomme réchauffent le sol en béton ciré gris perle des chambres. 

Depuis la villa, on n’a que quelques pas à faire pour accéder au très select Nikki Beach Club, accessible par voie privée. On peut aussi remonter jusqu’à Tahiti Beach, pour aller déguster un mojito les pieds dans le sable sur la terrasse colorée du Moorea. Le soir venu, on regagne la villa et on va faire quelques longueurs dans la piscine, avec une vue imprenable sur la Méditerranée, pendant que les enfants jouent à cache-cache dans les champs d’oliviers. 
","2024-10-15",1);
INSERT INTO sale (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite, id_home )
VALUES ("Domaine de la constallion", "AHBGF","https://cdn.lecollectionist.com/__lecollectionist__/production/houses/5467/photos/fm2WvoJRbWJYKGAua0lg_57e31ab5-7862-43f2-d9e6-b75de57559ee.jpg?width=1440&q=65&func=crop","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/house-5467/2022-03-11-b2d8eb3b2b8a253a2827310c6523befa.jpeg?width=1140&height=400&q=65", "https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/house-5467/2022-03-11-f6749106f1b8a85d15bb7cdca44be8d9.jpeg?width=562&height=348&q=65","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/house-5467/2022-03-11-b81fbb844f590e8928603c336531ba88.jpeg?width=562&height=348&q=65","https://www.lecollectionist.com/fr/location-luxe/villa-maestra-presqu-ile-saint-tropez/photos","8 rue de la lune, Saint tropez", "Villa Maestra 

Presqu'ile Saint-Tropez,
Côte d'Azur,
France
18 voyageurs·7 chambres·8 salles de bain·600 m²
Propriété contemporaine construite en 2017, implantée sur la commune de St-Tropez, dans le quartier de la Pierre Plantée, dans un secteur calme et recherché surplombant la baie des Cannoubiers.
À cinq minutes en voiture du Port et de la Place des Lices avec accès facile aux Plages.
Terrain plat d’une superficie de 2200 m2, surplombant les vignes avec vue mer au premier étage.
Elle se compose de 8 chambres.","2024-10-15",3);
INSERT INTO sale (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, disponibilite, id_home )
VALUES ("Domaine de la lune", "AHBGF","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1586/Photos00058.jpg?width=1440&q=65&func=crop","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1600/Photos00086.jpg?width=562&height=348&q=65", "https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1577/Photos00030.jpg?width=1440&q=65","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1586/Photos00058.jpg?width=1440&q=65&func=crop","https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/1603/Photos00093.jpg?width=1440&q=65","8 rue de la lune, Saint tropez", "Domaine de la lune

Saint tropez,
Côte d'Azur,
France
14 voyageurs·7 chambres·7 salles de bain·500 m²
Tout en verre et en béton, la villa Hanoï se dresse au milieu d’un immense terrain au gazon parfaitement taillé. Sur la terrasse qui fait face à la mer, les parasols design et les transats rose chamallow rappellent les hôtels d’Ocean Drive. A l’intérieur, l’espace entièrement vitré et les murs immaculés mettent en valeur la décoration épurée, subtilement twistée par les meubles de designers, les touches de couleurs pop et la lumière des néons. Dans le salon, la table rose bonbon et un tableau d’art contemporain multicolore apportent du peps à la cuisine minimaliste. Des tapis turquoise, fuchsia ou vert pomme réchauffent le sol en béton ciré gris perle des chambres. 

Depuis la villa, on n’a que quelques pas à faire pour accéder au très select Nikki Beach Club, accessible par voie privée. On peut aussi remonter jusqu’à Tahiti Beach, pour aller déguster un mojito les pieds dans le sable sur la terrasse colorée du Moorea. Le soir venu, on regagne la villa et on va faire quelques longueurs dans la piscine, avec une vue imprenable sur la Méditerranée, pendant que les enfants jouent à cache-cache dans les champs d’oliviers. 
","2024-10-15",2);







