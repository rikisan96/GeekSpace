CREATE TABLE tipo (
    idTipo INT PRIMARY KEY,
    tipo_nature VARCHAR(50),
    tipo_description TEXT,
    tipo_primary_colour VARCHAR(20),
    tipo_secondary_colour VARCHAR(20),
    tipo_design VARCHAR(50)
);

CREATE TABLE prodotti (
    idProdotto INT PRIMARY KEY,
    prodotto_name VARCHAR(100),
    tipo_nature INT,
    prodotto_primary_colour VARCHAR(20),
    prodotto_secondary_colour VARCHAR(20),
    prodotto_is_rgb INT,
    prodotto_price_unit DECIMAL(10, 2),
    prodotto_description TEXT,
    prodotto_is_avaiable INT,
    tipo_design INT,
    prodotto_brand VARCHAR(50),
    prodotto_picture VARCHAR(255),
    FOREIGN KEY (tipo_nature) REFERENCES tipo(idTipo),
    FOREIGN KEY (tipo_design) REFERENCES tipo(idTipo)
);

CREATE TABLE utenti (
    idUser INT PRIMARY KEY,
    user_username VARCHAR(50),
    user_password VARCHAR(255),
    user_email VARCHAR(100),
    user_role VARCHAR(20)
);

CREATE TABLE carrelli (
    idCarrello INT PRIMARY KEY,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES utenti(idUser)
);

CREATE TABLE elementi_carrello (
    idElementoCarrello INT PRIMARY KEY,
    id_carrello INT,
    id_prodotto INT,
    quantita INT,
    FOREIGN KEY (id_carrello) REFERENCES carrelli(idCarrello),
    FOREIGN KEY (id_prodotto) REFERENCES prodotti(idProdotto)
);

CREATE TABLE vendite (
    idVendita INT PRIMARY KEY,
    selling_date_of_sell DATE,
    id_carrello INT,
    FOREIGN KEY (id_carrello) REFERENCES carrelli(idCarrello)
);