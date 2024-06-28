--IF NOT EXISTS (SELECT name FROM master.sys.databases WHERE NAME = 'ladies')
--BEGIN
--	CREATE DATABASE ladies;
--	PRINT 'Database successfully created.';
--END
--ELSE
--	BEGIN
--		PRINT 'Database already exists.';
--	END

--GO
--USE ladies;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('categories'))
--BEGIN
--	CREATE TABLE categories (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		category_name VARCHAR(100) NOT NULL,
--	);
--	PRINT 'Table categories has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table categories already exists';
--	END

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('products'))
--BEGIN
--	CREATE TABLE products (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		product_name VARCHAR(100) NOT NULL,
--		product_author VARCHAR(100) NOT NULL,
--		product_price INT NOT NULL,
--		product_description VARCHAR(1000) NOT NULL,
--		product_rate DECIMAL NOT NULL,
--		review_count INT NOT NULL,
--		stock INT NOT NULL,
--		image_source VARCHAR(255) NOT NULL,
--		category_id INT NOT NULL,
--		product_route VARCHAR(255) NOT NULL,
--		FOREIGN KEY (category_id) REFERENCES categories(ID)
--	);
--	PRINT 'Table products has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table products already exists';
--	END

--ALTER TABLE products ADD ingridients VARCHAR(1000);
--ALTER TABLE products ALTER COLUMN ingridients VARCHAR(1500);

--UPDATE products SET ingridients = 'AQUA (WATER), ALCOHOL, ACRYLATES COPOLYMER, AMP-ACRYLATES COPOLYMER, HYDROXYETHYLCELLULOSE, PHENOXYETHANOL, PEG-12 DIMETHICONE, CAPRYLYL GLYCOL, PANTHENOL, BUTYLENE GLYCOL, GOSSYPIUM HERBACEUM (COTTON) EXTRACT. Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 1;
--UPDATE products SET ingridients = '875178 50 : ALCOHOL , PARFUM / FRAGRANCE , AQUA / WATER , LIMONENE , LINALOOL , BENZYL SALICYLATE , HYDROXYCITRONELLAL , BENZYL ALCOHOL , ETHYLHEXYL SALICYLATE , BUTYL METHOXYDIBENZOYLMETHANE , COUMARIN , GERANIOL , METHYL ANTHRANILATE , CITRONELLOL , CITRAL , ISOEUGENOL , ALPHA,ISOMETHYL IONONE , FARNESOL , CI 14700 / RED 4 , CI 19140 / YELLOW 5 , CI 60730 / EXT. VIOLET 2 (F.I.L. C235192/1). Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 2;
--UPDATE products SET ingridients = 'WATER (AQUA), SYNTHETIC WAX, LACTIC ACID, CETEARYL ALCOHOL, HYDRATED SILICA, CETYL ALCOHOL, STEARYL ALCOHOL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, GLYCERIN, SODIUM HYDROXIDE, FRAGRANCE (PARFUM), LAURYL LAURATE, SALICYLIC ACID, XANTHAN GUM, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, ETHYLHEXYLGLYCERIN, SODIUM BENZOATE, GLYCOLIC ACID, PASSIFLORA EDULIS SEED POWDER, POTASSIUM SORBATE, CITRIC ACID, BAMBUSA ARUNDINACEA STEM EXTRACT, SODIUM PHYTATE, ETHYLENE BRASSYLATE, SORBITAN ISOSTEARATE, VACCINIUM MYRTILLUS FRUIT EXTRACT, ANANAS SATIVUS (PINEAPPLE) FRUIT EXTRACT, SACCHARUM OFFICINARUM (SUGAR CANE) EXTRACT, CARICA PAPAYA (PAPAYA) FRUIT EXTRACT, MANGIFERA INDICA (MANGO) FRUIT EXTRACT, CITRUS AURANTIUM DULCIS (ORANGE) FRUIT EXTRACT, CITRUS LIMON (LEMON) FRUIT EXTRACT, HAEMATOCOCCUS PLUVIALIS OIL, LACTOBACILLUS FERMENT, LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE, ACER SACCHARUM (SUGAR MAPLE) EXTRACT, ASTAXANTHIN, TOCOPHEROL, ROSMARINUS OFFICINALIS (ROSEMARY) EXTRACT, RED 33 (CI 17200) Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 3;
--UPDATE products SET ingridients = 'TRICAPRYLIN, C12-15 ALKYL ETHYLHEXANOATE, POLYETHYLENE, POLYMETHYL METHACRYLATE, OCTYLDODECANOL, SUCROSE ACETATE ISOBUTYRATE, CERA MICROCRISTALLINA/MICROCRYSTALLINE WAX/CIRE MICROCRISTALLINE, OCTYLDODECYL NEOPENTANOATE, SILICA, POLYMETHYLSILSESQUIOXANE, CAPRYLYL GLYCOL, VP/EICOSENE COPOLYMER, VP/HEXADECENE COPOLYMER, CETYL PEG/PPG-10/1 DIMETHICONE, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, TOCOPHERYL ACETATE, ASCORBYL PALMITATE, COCOS NUCIFERA (COCONUT) OIL, SODIUM HYALURONATE, TOCOPHEROL, MICA, CALCIUM SODIUM BOROSILICATE, SYNTHETIC FLUORPHLOGOPITE, CALCIUM ALUMINUM BOROSILICATE, POLYETHYLENE TEREPHTHALATE, BHT, ACRYLATES COPOLYMER, TIN OXIDE, IRON OXIDES (CI 77491, CI 77492, CI 77499), TITANIUM DIOXIDE (CI 77891)."" Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 4;
--UPDATE products SET ingridients = '875178 50 : ALCOHOL , PARFUM / FRAGRANCE , AQUA / WATER , LIMONENE , LINALOOL , BENZYL SALICYLATE , HYDROXYCITRONELLAL , BENZYL ALCOHOL , ETHYLHEXYL SALICYLATE , BUTYL METHOXYDIBENZOYLMETHANE , COUMARIN , GERANIOL , METHYL ANTHRANILATE , CITRONELLOL , CITRAL , ISOEUGENOL , ALPHA,ISOMETHYL IONONE , FARNESOL , CI 14700 / RED 4 , CI 19140 / YELLOW 5 , CI 60730 / EXT. VIOLET 2 (F.I.L. C235192/1). Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 5;
--UPDATE products SET ingridients = '2031507 53 - INGREDIENTS: AQUA / WATER / EAU, DIPROPYLENE GLYCOL, GLYCERIN, BUTYLENE GLYCOL, PROPYLENE GLYCOL, ALCOHOL, NIACINAMIDE, ISOPROPYL LAUROYL SARCOSINATE, PENTYLENE GLYCOL, CI 77891 / TITANIUM DIOXIDE, GUANOSINE, MICA, TOCOPHERYL ACETATE, HYDROLYZED LINSEED EXTRACT, SODIUM ACETYLATED HYALURONATE, SODIUM BENZOATE, PHENOXYETHANOL, PHENYLETHYL RESORCINOL, STEARIC ACID, ADENOSINE, CAFFEINE, PEG-100 STEARATE, POLYACRYLATE CROSSPOLYMER-6, SILICA SILYLATE, PALMITIC ACID, POLYSORBATE 20, POLYSORBATE 80, AMMONIUM POLYACRYLOYLDIMETHYL TAURATE, LIMONENE, XANTHAN GUM, TIN OXIDE, BENZYL ALCOHOL, ISOHEXADECANE, 3-O-ETHYL ASCORBIC ACID, CAPRYLYL GLYCOL, CAPRYLOYL SALICYLIC ACID, BORON NITRIDE, FERULIC ACID, ACRYLAMIDE/SODIUM ACRYLOYLDIMETHYLTAURATE COPOLYMER, SORBITAN OLEATE, MYRISTIC ACID, GERANIOL, OCTOCRYLENE, BUTYL METHOXYDIBENZOYLMETHANE, POTASSIUM CETYL PHOSPHATE, OCTYLDODECANOL, CETYL ALCOHOL, OCTYLDODECYL XYLOSIDE, CITRIC ACID, CITRONELLOL, GLYCERYL STEARATE, PARFUM / FRAGRANCE (F.I.L. B260371/2).' WHERE ID = 6;
--UPDATE products SET ingridients = 'water\aqua\eau, glycerin, caprylic/capric triglyceride, c12-20 acid peg-8 ester, simmondsia chinensis ( jojoba) seed oil(2), caprylic/capric/myristic/stearic triglyceride, hydroxyethyl urea, cetyl alcohol, niacinamide, dimethicone, butylene glycol, sodium polyaspartate, ammonium acryloyldimethyltaurate/vp copolymer, citrus limon (lemon) peel oil(1) , citrus grandis (grapefruit) peel oil(1) , mentha viridis (spearmint) leaf oil(1) , citrus aurantium dulcis (orange) peel oil(1) , limonene, linalool, citral, panax ginseng (ginseng) root extract, hordeum vulgare (barley) extract\ extrait d''orge, salicylic acid, algae extract, linoleic acid, ca eine, sucrose(2), cucumis sativus (cucumber) fruit extract, trehalose, ophiopogon japonicus root extract, sorbitol, phospholipids, tocopheryl acetate, tocopherol, co ea arabica (co ee) seed oil, arginine, sodium hyaluronate, butyrospermum parkii (shea bu, er), helianthus annuus (sunflower) seedcake, squalane, ethylhexylglycerin, caprylyl glycol, peg-100 stearate, glyceryl stearate, potassium cetyl phosphate, acrylates/ c10-30 alkyl acrylate crosspolymer, behenyl alcohol, xanthan gum, carbomer, sodium hydroxide, disodium edta, chlorphenesin, potassium sorbate, phenoxyethanol (1) essential oil / huile essentielle (2)organic jojoba oil, organic sucrose (brown sugar) / huile de jojoba bio, saccharose bio (sucre brun) Bu i�erik listesi de�i�ebilir, l�tfen sat�n al�nan �r�n�n ambalaj�na bak�n' WHERE ID = 7;
--UPDATE products SET ingridients = '#19017 AQUA (WATER) � ALCOHOL � GLYCERIN � CAPRYLIC/CAPRIC TRIGLYCERIDE � DICAPRYLYL ETHER � PARFUM (FRAGRANCE) � C10-18 TRIGLYCERIDES � THEOBROMA GRANDIFLORUM SEED BUTTER � STEARETH-21 � 1,2-HEXANEDIOL � CELLULOSE � PENTYLENE GLYCOL � STEARETH-2 � CETYL ALCOHOL � STEARYL ALCOHOL � ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER � SYNTHETIC FLUORPHLOGOPITE � CHLORPHENESIN � CI 77891 (TITANIUM DIOXIDE) � HYDROXYCITRONELLAL � JASMINUM OFFICINALE (JASMINE) FLOWER WAX � HEXYL CINNAMAL � TRIETHYL CITRATE � SODIUM HYDROXIDE � CITRONELLOL � LIMONENE � ALPHA-ISOMETHYL IONONE � PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE � LINALOOL � GERANIOL � CINNAMYL ALCOHOL � TOCOPHEROL � CITRAL' WHERE ID = 8;
--UPDATE products SET ingridients = 'DIMETHICONE, ISOHEXADECANE, C13-14 ISOPARAFFIN, COCO-CAPRYLATE, PHENYL TRIMETHICONE, BIS-AMINOPROPYL DIGLYCOL DIMALEATE, PROPANEDIOL, ZEA MAYS (CORN) OIL, BETA-CAROTENE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, MORINGA OLEIFERA SEED OIL, PUNICA GRANATUM SEED OIL, WATER (AQUA), MORINDA CITRIFOLIA FRUIT POWDER, FRAGRANCE (PARFUM), HEXYL CINNAMAL, ECLIPTA PROSTRATA EXTRACT, ETHYLHEXYL METHOXYCINNAMATE, LIMONENE, TOCOPHEROL, CITRAL, LINALOOL, MELIA AZADIRACHTA LEAF EXTRACT, CITRONELLOL, PSEUDOZYMA EPICOLA/CAMELLIA SINENSIS SEED (GREEN TEA) OIL FERMENT EXTRACT FILTRATE.' WHERE ID = 9;
--UPDATE products SET ingridients = '-SP94: POWERFUL, GLUCO-PEPTIDE THAT ENHANCES HAIR FIBER�S RESILIENCE, STRUCTURE, AND STRENGTH. -AMINO ACIDS: COMPENSATE FOR THE LOSS OF FIBER MASS. -WHEAT PROTEIN DERIVATIVE: RESTORES UNIFORMITY AND SMOOTHNESS. -RESURRECTION SAP: RESTORES THE HAIR FIBER. WATER, CETEARYL ALCOHOL, PARAFFINUM LIQUIDUM / MINERAL OIL, ORBIGNYA OLEIFERA SEED OIL, DIPALMITOYLETHYL HYDROXYETHYLMONIUM METHOSULFATE, FRAGRANCE, CETYL ESTERS, CETRIMONIUM CHLORIDE, CAPRYLYL GLYCOL, LINALOOL, CITRIC ACID, 2-OLEAMIDO-1,3-OCTADECANEDIOL, CITRONELLOL, BHT, GLYCINE, ARGININE, PROLINE, TYROSINE, GLUTAMIC ACID, GERANIOL, SERINE, HYDROXYPROPYLTRIMONIUM HYDROLYZED WHEAT PROTEIN, BENZYL ALCOHOL, SAFFLOWER GLUCOSIDE, ISOEUGENOL, GLYCERIN, TREHALOSE, TAMARINDUS INDICA SEED POLYSACCHARIDE, MYROTHAMNUS FLABELLIFOLIA LEAF EXTRACT.' WHERE ID = 10;

--SELECT * FROM products;

--INSERT INTO categories (category_name)
--VALUES ('Makyaj'), ('Parf�m'), ('Cilt Bak���'), ('V�cut ve Banyo'), ('Sa�');

--ALTER TABLE products
--ALTER COLUMN product_description VARCHAR(1000);


--TRUNCATE TABLE products;

--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('24-HR Brow Setter - Ka� Sabitleyici', 'BENEFIT COSMETICS', 60, '24h Brow Setter ka�lar�n�z i�in sabitleyici �effaf jel sayesinde m�kemmel ka�lara sahip olacaks�n�z. ,Da��lmayan esnek form�l ve ola�an�st� f�r�as� sayesinde kolay uygulama�,Jeli f�r�an�n uzun k�ll� ucunu kullanarak uygulay�n. ,Tek ba��na veya di�er sabitle�tirici �r�nlerle birlikte kullan�labilir.', 0.0, 0, 8, '../assets/images/�r�nler/benefit-kas-sabitleyici.jpg', (SELECT ID FROM categories WHERE category_name = 'Makyaj'), '/benefit');
--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('Libre - Eau De Parfum', 'YVES SAINT LAURENT', 40, 'Her iki ucunda da hayat� yakan bir kad�n i�in �i�eksi, �evhetli ve c�retkar bir lavanta. �zg�rl�k ���l��� gibi bir kooku. Her �eyi ��lg�nca ya�aman�n �zg�rl���.', 0.0, 0, 7, '../assets/images/�r�nler/yvs-parfum.jpg', (SELECT ID FROM categories WHERE category_name = 'Parf�m'), '/libre');

--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('Bom Dia Body Scrub - V�cut Peelingi', 'SOL DE JANERIO', 80, 'P�r�zs�z, eskitimli g�r�nen bir cilt i�in netli�i, tonu ve dokuyu g�zle �ekerek iyile�tirmek �zere y�zde 10 AHA BHA Yenileme Kompleksi ile a��lanm�� Bom Dia V�cut Ovucu.', 0.0, 0, 3, '../assets/images/�r�nler/vucutpeeling.jpg', (SELECT ID FROM categories WHERE category_name = 'V�cut Ve Banyo'), '/bomdia');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('Match Stix Matte Skinstick - �ok Kullan�ml� Stick Fond�ten', 'FENTY BEAUTY', 30, '�ok say�da cilt tonunu geli�tirmek i�in test edilen bu ultra m�kemmel renk paleti ile nerede olursan�z makyaj�n�z� yap�n. Kullan�m� kolay �ubuk format�, yanak, burun veya �ene �izgisi �zerine hassas uygulama i�in idealdir.', 0.0, 0, 6, '../assets/images/�r�nler/fenty-fondoten.jpg', (SELECT ID FROM categories WHERE category_name = 'Makyaj'), '/fenty');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('J''adore L''Or - Essence de Parfum', 'DIOR', 100, '�i�eklerin g�zelli�ini, n�anslar� ve renkleri ile oynayarak zenginle�tirdi�i parf�md�r. Portakal �i�e�i mutlak, yasemin grandiflorum ve centifolia g�l� notalar� dolgunluk ve �evhetle ortaya ��k�yor: bunlar J''adore''un ger�ek alt�n�d�r.', 0.0, 0, 4, '../assets/images/�r�nler/jadore.jpg', (SELECT ID FROM categories WHERE category_name = 'Parf�m'), '/jadore');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('R�nergie H.C.F Triple G�z Serumu - Anti-Aging Serum', 'LANC�ME', 56, 'Estetik prosed�rler ge�iren kad�nlar taraf�ndan �nerilen, H.C.F.Triple G�z Serumu an�nda g�zleri gen�le�tirir..', 0.0, 0, 3, '../assets/images/�r�nler/lancome.jpg', (SELECT ID FROM categories WHERE category_name = 'Cilt Bak���'), '/renergie');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('GinZing - Ultra Nemlendirici Enerji Verici Krem', 'ORIGINS', 88, 'Yeterince uyuyamad�n�z m�? Cildinize enerjisini geri verin! Enerji veren yo�un nemlendirici krem. Cildin enerjik g�r�nmesine desrek olan yo�un nemlendirici krem, donuk-yorgun g�r�nen cildi canland�rarak 72 saat boyunca nemini korumas�na yard�mc� olur.', 0.0, 0, 7, '../assets/images/�r�nler/origins.jpg', (SELECT ID FROM categories WHERE category_name = 'Cilt Bak���'), '/ginzing');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('J''adore Les Adorables - Body Milk', 'DIOR', 83, 'J''adore Les Adorables, geli�mi� bir g�zellik rutini i�in J''adore ruhuyla a��lanm�� bir g�nl�k cilt bak�m �r�nleri serisidir.', 0.0, 0, 9, '../assets/images/�r�nler/bodymilk.jpg', (SELECT ID FROM categories WHERE category_name = 'V�cut ve Banyo'), '/bodymilk');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('N� 7 Bonding Oil', 'OLAPLEX', 27, 'Is�ya kar�� koruyan ve elektriklenmeyi artt�rarak ultra konsantre, ultra hafif ve t�r�n�n tek �rne�i olan onar�c� sa� ya��. Olaplex Binding Oil No. 7 t�m sa� tiplerini onar�r, g��lendirir ve nemlendirir. Renklerin parlakl���n�, p�r�zs�zl���n� ve canl�l���n� �nemli �l��de art�r�rken dalgalanmalar� en aza indirir ve 450 � F / 230 � C''ye kadar �s� korumas� sa�lar. T�m sa� tipleri ve t�rleri i�in uygundur.', 0.0, 0, 8, '../assets/images/�r�nler/olaplex.jpg', (SELECT ID FROM categories WHERE category_name = 'Sa�'), '/bondingoil');


--INSERT INTO products (product_name, product_author, product_price, product_description, product_rate, review_count, stock, image_source, category_id, product_route)
--VALUES ('Resistance Therapist - �ok Y�pranm�� Sa�lar ��in Yo�un Onar�c� Bak�m Maskesi', 'K�RASTASE', 77, 'Th�rapiste Sa� Maskesi �ok y�pranm�� ve a��r� i�lem g�rm�� sa�lar i�in yo�un sa� bak�m� maskesidir. Sa� telinin �z�n� derinlemesine onararak g�c�n� ve elastikiyetini geri kazd�r�r. Sa�lar canlan�r ve g�zelle�ir.', 0.0, 0, 1, '../assets/images/�r�nler/keraste.jpg', (SELECT ID FROM categories WHERE category_name = 'Sa�'), '/kerastase');

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('members'))
--BEGIN
--	CREATE TABLE members (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		first_name VARCHAR(32) NOT NULL,
--		surname VARCHAR(32) NOT NULL,
--		gender BIT,
--		birth_date DATETIME,
--		email_address VARCHAR(50) NOT NULL,
--		phone_number VARCHAR(11),
--		user_password VARCHAR(30) NOT NULL
--	);
--	PRINT 'Table members has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table products already exists';
--	END

--INSERT INTO members(first_name,surname,email_address,user_password) VALUES ('Ahmet','�ak�c�','ahmetcakici@gmail.com','1234567');

--SELECT * FROM members;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('ratings'))
--BEGIN
--	CREATE TABLE ratings (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		product_id INT NOT NULL,
--		member_id INT NOT NULL,
--		rating INT NOT NULL,
--		FOREIGN KEY (product_id) REFERENCES products(ID),
--		FOREIGN KEY (member_id) REFERENCES members(ID)
--	);
--	PRINT 'Table ratings has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table ratings already exists';
--	END

--TRUNCATE TABLE ratings;

--SELECT * FROM ratings;

--IF NOT ( (SELECT COUNT(*) FROM ratings WHERE product_id = 1 AND member_id = 1) > 0)
--	BEGIN
--		INSERT INTO ratings(product_id,member_id,rating) VALUES (1,1,5);
--	END
--ELSE
--	BEGIN
--		UPDATE ratings SET rating = 3 WHERE product_id = 1 AND member_id = 1;
--	END
--UPDATE products SET product_rate = (SELECT AVG(rating) FROM ratings WHERE product_id = 1), review_count = (SELECT COUNT(*) FROM ratings WHERE product_id = 1) WHERE ID = 1;

--SELECT * FROM ratings;
--SELECT * FROM products;

--SELECT * FROM members;

--SELECT rating FROM ratings WHERE product_id = 1 AND member_id = 1;

--UPDATE members SET first_name = '?', surname = '?', gender = '?', birth_date = '?', email_address = '?', phone_number = '?' WHERE ID = uid`

--UPDATE members SET gender = NULL, birth_date = NULL, phone_number = NULL WHERE ID = 1;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('member_messages'))
--BEGIN
--	CREATE TABLE member_messages (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		member_id INT NOT NULL,
--		member_message VARCHAR(1000) NOT NULL,
--		FOREIGN KEY (member_id) REFERENCES members(ID)
--	);
--	PRINT 'Table member_messages has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table member_messages already exists';
--	END

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('customer_messages'))
--BEGIN
--	CREATE TABLE customer_messages (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		first_name VARCHAR(30) NOT NULL,
--		last_name VARCHAR(30) NOT NULL,
--		email_address VARCHAR(50) NOT NULL,
--		phone_number VARCHAR(11) NOT NULL,
--		customer_message VARCHAR(1000) NOT NULL
--	);
--	PRINT 'Table customer_messages has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table customer_messages already exists';
--	END

--SELECT * FROM customer_messages;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('customer_cart'))
--BEGIN
--	CREATE TABLE customer_cart (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		member_id INT NOT NULL,
--		product_id INT NOT NULL,
--		quantity INT NOT NULL,
--		FOREIGN KEY (member_id) REFERENCES members(ID),
--		FOREIGN KEY (product_id) REFERENCES products(ID)
--	);
--	PRINT 'Table customer_cart has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table customer_cart already exists';
--	END

--ALTER TABLE customer_cart ADD quantity INT NOT NULL;

--IF NOT ((SELECT COUNT(*) FROM customer_cart WHERE member_id = 1 AND product_id = 1) > 0)
--BEGIN
--	INSERT INTO customer_cart(member_id,product_id,quantity) VALUES(1,1,1);
--END
--ELSE
--	BEGIN
--		UPDATE customer_cart SET quantity = (SELECT (quantity+1) FROM customer_cart WHERE member_id = 1 AND product_id = 1) WHERE member_id = 1 AND product_id = 1
--	END

--SELECT * FROM customer_cart;
--SELECT quantity FROM customer_cart WHERE member_id = 1 AND product_id = 1;
--DELETE FROM customer_cart WHERE member_id = 1;
--SELECT * FROM customer_cart WHERE member_id = 1;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('customer_favs'))
--BEGIN
--	CREATE TABLE customer_favs (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		member_id INT NOT NULL,
--		product_id INT NOT NULL,
--		FOREIGN KEY (member_id) REFERENCES members(ID),
--		FOREIGN KEY (product_id) REFERENCES products(ID)
--	);
--	PRINT 'Table customer_favs has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table customer_favs already exists';
--	END

--SELECT * FROM customer_favs;

--SELECT * FROM products WHERE product_name LIKE '%libre%';

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('customer_orders'))
--BEGIN
--	CREATE TABLE customer_orders (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		member_id INT NOT NULL,
--		order_date DATE NOT NULL,
--		total_amount INT NOT NULL,
--		FOREIGN KEY (member_id) REFERENCES members(ID),
--	);
--	PRINT 'Table customer_orders has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table customer_orders already exists';
--	END

--SELECT * FROM customer_orders;

--SELECT * FROM order_details WHERE order_id = 2;
--UPDATE order_details SET order_id = 3 WHERE ID = 3;
--SELECT * FROM order_details;

--ALTER TABLE customer_orders ADD order_address VARCHAR(1500), order_city VARCHAR(50), order_country VARCHAR(50);

--UPDATE customer_orders SET order_address = 'Yavuzlar Mah. 8810 Cad. No: 123', order_city = '�stanbul', order_country = 'T�rkiye' WHERE ID = 3;
--UPDATE customer_orders SET post_code = 34000 WHERE ID = 3;

--ALTER TABLE customer_orders ADD post_code INT;

--UPDATE customer_orders SET post_code = 34000 WHERE ID = 2;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('order_details'))
--BEGIN
--	CREATE TABLE order_details (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		order_id INT NOT NULL,
--		product_id INT NOT NULL,
--		quantity INT NOT NULL,
--		unit_price INT NOT NULL,
--		subtotal_price INT NOT NULL,
--		FOREIGN KEY (order_id) REFERENCES customer_orders(ID),
--		FOREIGN KEY (product_id) REFERENCES products(ID)
--	);
--	PRINT 'Table order_details has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table order_details already exists';
--	END

--INSERT INTO customer_orders(member_id,order_date,total_amount) VALUES (1,2024-6-21,60)

--SELECT * FROM customer_orders;

--SELECT TOP 1 * FROM customer_orders WHERE member_id = 1 ORDER BY order_date DESC;
--SELECT * FROM order_details;

--DELETE FROM customer_cart WHERE member_id = 1;

--SELECT * FROM customer_orders WHERE member_id = 1;

--IF NOT EXISTS (SELECT * FROM sys.objects WHERE [type] = 'U' AND name = 'ladies' AND [schema_id] = SCHEMA_ID('product_comments'))
--BEGIN
--	CREATE TABLE product_comments (
--		ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--		member_id INT NOT NULL,
--		product_id INT NOT NULL,
--		comment_date DATE NOT NULL,
--		comment VARCHAR(1000) NOT NULL,
--		FOREIGN KEY (member_id) REFERENCES members(ID),
--		FOREIGN KEY (product_id) REFERENCES products(ID)
--	);
--	PRINT 'Table product_comments has created successfully';
--END
--ELSE
--	BEGIN
--		PRINT 'Table product_comments already exists';
--	END

--SELECT * FROM product_comments where product_id = 1;

--INSERT INTO product_comments(member_id,product_id,comment_date,comment) VALUES(5,1,'2024-06-21','Herkese tavsiye ediyorum');

--SELECT * FROM members;