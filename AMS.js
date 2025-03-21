
  function validateParentLogin() {
    const phone = document.getElementById('phone').value;
    const otp = document.getElementById('otp').value;

    // Basic validation for phone and OTP
    if (!phone || !otp) {
      alert('Please fill in both Phone No and OTP.');
      return;
    }

    // If all fields are filled, redirect to parent login page
    location.href = 'parent.html';
  }

  function validateStudentLogin() {
    const regno = document.getElementById('regno').value;
    const password = document.getElementById('password').value;

    // Basic validation for Regn No and Password
    if (!regno || !password) {
      alert('Please fill in both Registration No and Password.');
      return;
    }

    // If all fields are filled, redirect to student login page
    location.href = 'Student.html';
  }

  function validateFacultyLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password2').value;

    // Basic validation for Email and Password
    if (!email || !password) {
      alert('Please fill in both Email and Password.');
      return;
    }

    // If all fields are filled, redirect to faculty login page
    location.href = 'Faculty.html';
  }
