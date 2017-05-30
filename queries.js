var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var cn = {
  host: 'ec2-184-73-199-72.compute-1.amazonaws.com',
  port: 5432,
  database: 'div12ifeaie44',
  user: 'inosbinnuouded',
  password: '786fb7b39d9c5f1888a7462203ae00a4a35b8c988eb4b38ca10de5f05d857d11',
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

function updateBooking(req, res, next){
  console.log(req.body)
  db.none('update booking set cname=$1, cemail=$2, vname=$3, eventDate=$4, price=$5 where bnumber=$6',
  [req.body.cname, req.body.cemail, req.body.vname,
    req.body.eventDate, req.body.price, parseInt(req.body.bnumber)])
  .then(function () {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated booking'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function deleteBooking(req, res, next){
  console.log(req.body)
  var bnumber = parseInt(req.body.bnumber);
  db.result('delete from booking where bnumber = $1', bnumber)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed booking'
        });
    })
    .catch(function (err) {
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
          message: 'Inserted one company'
        });
    })
    .catch(function (err){
      return next(err);
    });
}

function updateCompany(req, res, next){
  console.log(req.body)
  db.none('update company set cname=$1, cemail=$2, cphone=$3, cdescription=$4 where cnumber=$5',
  [req.body.cname, req.body.cemail, req.body.cphone,
    req.body.cdescription, parseInt(req.body.cnumber)])
  .then(function () {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated company'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function deleteCompany(req, res, next){
  console.log(req.body)
  var cnumber = parseInt(req.body.cnumber);
  db.result('delete from company where cnumber = $1', cnumber)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed company'
        });
    })
    .catch(function (err) {
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

function updateTour(req, res, next){
  console.log(req.body)
  db.none('update tour set cname=$1, cemail=$2, vname=$3, tourDate=$4, timeslot=$5 where tnumber=$6',
  [req.body.cname, req.body.cemail, req.body.vname,
    req.body.tourDate, req.body.timeslot, parseInt(req.body.tnumber)])
  .then(function () {
    res.status(200)
      .json({
        status: 'success',
        message: 'Updated tour'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function deleteTour(req, res, next){
  console.log(req.body)
  var tnumber = parseInt(req.body.tnumber);
  db.result('delete from tour where tnumber = $1', tnumber)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed tour'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllBookings: getAllBookings,
  createBooking: createBooking,
  updateBooking: updateBooking,
  deleteBooking: deleteBooking,
  getAllCompanies: getAllCompanies,
  createCompany: createCompany,
  updateCompany: updateCompany,
  deleteCompany: deleteCompany,
  getAllTours: getAllTours,
  createTour: createTour,
  deleteTour: deleteTour,
  updateTour: updateTour,
};
