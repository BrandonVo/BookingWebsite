CREATE TABLE booking(
  bnumber SERIAL PRIMARY KEY,
  cname TEXT,
  cemail TEXT,
  vname TEXT,
  price REAL,
  eventDate Text
);

CREATE TABLE company(
  cnumber SERIAL PRIMARY KEY,
  cname TEXT,
  cdescription TEXT,
  cemail TEXT,
  cphone TEXT,
);

CREATE TABLE tour(
  tnumber SERIAL PRIMARY KEY,
  cname TEXT,
  cemail TEXT,
  vname TEXT,
  tourDate TEXT,
  timeslot CHAR(2)
);
