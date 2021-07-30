// Our web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAi-uKONBNpQYYlI4YzmmnDAxrYVzvjCRQ",
  authDomain: "devl-78f1c.firebaseapp.com",
  projectId: "devl-78f1c",
  storageBucket: "devl-78f1c.appspot.com",
  messagingSenderId: "427527821339",
  appId: "1:427527821339:web:a05dd1cb8e512c6733c0be",
  databaseURL: "https://devl-78f1c-default-rtdb.firebaseio.com/",
  measurementId: "G-32W7ZRJ39V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
var ref;

//----------------Ready Data-------------------//

var LN_NameV, indexV, drive_linkV, cover_linkV;

function ReadyData()
{
  LN_NameV = document.getElementById('ln-name').value;
  indexV = document.getElementById('index').value;
  drive_linkV = document.getElementById('drive-link').value;
  cover_linkV = "./assets/cover/"+LN_NameV+"/"+indexV+".png";
  ref = db.ref('LN/' + LN_NameV + "/" + indexV);
}

//---------------Insert Process----------------//

try
{
  document.getElementById('insert').onclick = function()
  {
    ReadyData();
    ref.set(
    {
      DriveLink: drive_linkV,
      CoverLink: cover_linkV
    });
  };
} catch (e)
{
  console.log(e);
}

//---------------Selection Process---------------//

try
{
  document.getElementById('select').onclick = function()
  {
    ReadyData();
    ref.on('value', function(snapshot)
    {
      document.getElementById('drive-link').value = snapshot.val().DriveLink;
    });
  }
} catch (e)
{
  console.log(e);
}

//---------------Update Process----------------//

try
{
  document.getElementById('update').onclick = function()
  {
    ReadyData();
    ref.update(
    {
      DriveLink: drive_linkV,
      CoverLink: cover_linkV
    });
  };
} catch (e)
{
  console.log(e);
}

//---------------Deletion Process----------------//

try
{
  document.getElementById('delete').onclick = function()
  {
    ReadyData();
    ref.remove();
  };
} catch (e)
{
  console.log(e);
}