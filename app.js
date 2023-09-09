var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Techmo",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var express = require('express');
var app = express();
var path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname))); // new

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/brandpage.html'));
});

app.get('/registration', function(req, res) {
    res.sendFile(path.join(__dirname + '/registrationPage.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about-us.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contactus.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

// app.get('/applyleave', function(req, res) {   // new
//     res.sendFile(path.join(__dirname + '/applyleave.html'));
// });

// app.post('/applyleave', function(req, res) {
//     var name = req.body.name;
//     var sapid = req.body.sapid;
//     var rollno = req.body.rollno;
//     var school = req.body.school;
//     var program = req.body.program;
//     var branch = req.body.branch;
//     var semester = req.body.semester;
//     var homeAddress = req.body.homeAddress;
//     var hostelRoomNo = req.body.hostelRoomNo;
//     var mobileNo = req.body.mobNo;
//     var parentsMobileNo = req.body.pMobNo;
//     var email = req.body.email;
//     var parentsEmail = req.body.pEmail;
//     var typeOfLeave = req.body.leaveType;
//     var leavefrom = req.body.dfrom;
//     var leaveto = req.body.dto;
//     var reason = req.body.reason;
//     var avgAttendance = req.body.avgAttendance;
//     var mentorName = req.body.mentor;
//     var status = "Pending";
//     var query = 'INSERT INTO students (name, sapID, rollNo, school, program, branch, semester, homeAddress, hostelRoomNo, mobileNo, parentMobileNo, emailID, parentEmailID, typeOfLeave, leavefrom, leaveto, Reason, avgAttendance, mentorName, status) VALUES ("' + name + '", "' + sapid + '", "' + rollno + '", "' + school + '", "' + program + '", "' + branch + '", "' + semester + '", "' + homeAddress + '", "' + hostelRoomNo + '", "' + mobileNo + '", "' + parentsMobileNo + '", "' + email + '", "' + parentsEmail + '", "' + typeOfLeave + '", "' + leavefrom + '", "' + leaveto + '", "' + reason + '", "' + avgAttendance + '", "' + mentorName + '", "' + status + '")';
//     con.query(query, function(err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
//     res.sendFile(path.join(__dirname + '/leave_applied.html'));
// });

// app.get('/viewleave', function(req, res) {   
//     res.render('index.ejs', { students: []});
// });

// app.get('/mentorlogin', function(req, res) {
//     res.sendFile(path.join(__dirname + '/mentor_login.html'));
// });

// app.post('/mentorlogin', function(req, res) {
//     con.query('SELECT name FROM mentor WHERE username = "' + req.body.uname + '" AND password = "' + req.body.psw + '"', function(err, result) {
//         if (err) throw err;
//         con.query('SELECT * FROM students WHERE mentorName = "' + result[0].name + '"', function(err, result) {
//             if (err) throw err;
//             res.render('index.ejs', { students: result });
//         });
//     });
// });