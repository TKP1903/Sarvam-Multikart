// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   margin: 15px;
//   font-size: 4em;
// `;

export default function({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "100%",
        margin: "15px",
        fontSize: "4em",
      }}
    >
      {children}
    </div>
  );
}
