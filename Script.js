function submitComplaint(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const room = document.getElementById("room").value;
    const category = document.getElementById("category").value;
    const complaint = document.getElementById("complaint").value;

    const complaintId =
        "HC" + Math.floor(1000 + Math.random() * 9000);

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h3>Complaint Submitted Successfully! ✅</h3>
        <br>
        <p><strong>Complaint ID:</strong> ${complaintId}</p>
        <p><strong>Student:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${roll
