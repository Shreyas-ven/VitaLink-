import { useState } from "react";
import { createOrgan } from "../services/organService";

const PostOrgan = () => {
  const [organName, setOrganName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [donorAge, setDonorAge] = useState("");
  const [donorGender, setDonorGender] = useState("");
  const [retrievalTime, setRetrievalTime] = useState("");
  const [expiryTime, setExpiryTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

    const organData = {

        organName,
        bloodGroup,
        donorAge,
        donorGender,
        retrievalTime,
        expiryTime,

        // Temporary Hospital ID
        hospitalId: localStorage.getItem("hospitalId")

    };


    const response = await createOrgan(organData);

    alert(response.data.message);

}
catch(error){

    console.log(error);

    alert("Organ Posting Failed");

}
  };

  return (
    <div>
      <h1>POST AVAILABLE ORGAN</h1>

      <form onSubmit={handleSubmit}>
        <select
          value={organName}
          onChange={(e) => setOrganName(e.target.value)}
        >
          <option value="">Select Organ</option>
          <option value="Kidney">Kidney</option>
          <option value="Liver">Liver</option>
          <option value="Heart">Heart</option>
          <option value="Lungs">Lungs</option>
          <option value="Pancreas">Pancreas</option>
          <option value="Cornea">Cornea</option>
        </select>

        <br />
        <br />

        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <br />
        <br />

        <input
          type="number"
          placeholder="Donor Age"
          value={donorAge}
          onChange={(e) => setDonorAge(e.target.value)}
        />

        <br />
        <br />

        <select
          value={donorGender}
          onChange={(e) => setDonorGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <br />
        <br />

        <label>Retrieval Time</label>

        <br />

        <input
          type="datetime-local"
          value={retrievalTime}
          onChange={(e) => setRetrievalTime(e.target.value)}
        />

        <br />
        <br />

        <label>Expiry Time</label>

        <br />

        <input
          type="datetime-local"
          value={expiryTime}
          onChange={(e) => setExpiryTime(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostOrgan;