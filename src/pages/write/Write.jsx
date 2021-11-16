import "./write.css";

export default function write() {
  return (
    <div className="write">
      <img src="./images/header.png" alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="writeInput "
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
          ></textarea>
          <button className="writeSubmit">Pulish</button>
        </div>
      </form>
    </div>
  );
}
