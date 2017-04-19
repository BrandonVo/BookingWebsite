var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var cn = {
  host: 'ec2-23-21-219-105.compute-1.amazonaws.com',
  port: 5432,
  database: 'dfs5nraar5tte4',
  user: 'kpbrgwgtajhlpm',
  password: '3f87cb343d3a31509a82325e08db1caba63f4c08f8e184a70f31e763027bdc9d',
  ssl: true
};

var db = pgp(cn);

// add query functions
function getAllBookings(req, res, next) {
  db.any('select * from booking')
    .then(function (data) {
      console.log(data)
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL bookings'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createBooking(req, res, next) {
  console.log(req.body)
  req.body.price = parseFloat(req.body.price);
  db.none('insert into booking(cname, cemail, vname, price, eventDate)' +
    'values(${cname}, ${cemail}, ${vname}, ${price}, ${eventDate})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one booking'
        });
    })
    .catch(function (err){
      return next(err);
    });
}


function getAllCompanies(req, res, next) {
  db.any('select * from company')
    .then(function (data) {
      console.log(data)
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL companies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createCompany(req, res, next) {
  console.log(req.body)
  req.body.price = parseFloat(req.body.price);
  db.none('insert into company(cname, cdescription, cemail, cphone)' +
    'values(${cname}, ${cdescription}, ${cemail}, ${cphone})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one booking'
        });
    })
    .catch(function (err){
      return next(err);
    });
}

function getAllTours(req, res, next) {
  db.any('select * from tour')
    .then(function (data) {
      console.log(data)
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL tours'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createTour(req, res, next) {
  console.log(req.body)
  req.body.price = parseFloat(req.body.price);
  db.none('insert into tour(cname, cemail, vname, tourDate, timeslot)' +
    'values(${cname}, ${cemail}, ${vname}, ${tourDate}, ${timeslot})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one tour'
        });
    })
    .catch(function (err){
      return next(err);
    });
}

module.exports = {
  getAllBookings: getAllBookings,
  createBooking: createBooking,
  getAllCompanies: getAllCompanies,
  createCompany: createCompany,
  getAllTours: getAllTours,
  createTour: createTour,
};
