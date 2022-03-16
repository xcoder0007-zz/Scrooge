CREATE DATABASE scrooge;

--\c into Scrooge
CREATE TABLE accounts (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    account text,
    customer text,
    balance text,
    last_update text
);

CREATE TABLE customers (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fname text,
    lname text,
    username text,
    dob text,
    type text,
    phone text,
    address text,
    city text,
    state text,
    country text,
    currency text,
    acceptterms boolean,
    ssn text
);
