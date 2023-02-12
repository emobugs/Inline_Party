import "./App.css";

const styles = {
  App: {
    maxWidth: '60rem',
    margin: '2rem auto',
    padding: '1rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    backgroundColor: 'white',
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #ccc',
      h3: {
        margin: '0 0 0.25rem 0'
      },
      'nth-of-type:(1)': {
        fontStyle: "italic"
      },
      'nth-of-type:(2)': {
        marginTop: '0.25rem',
        fontWeight: 'bold',
        color: '#ad5502',
        fontSize: '1.25rem',
      }
    },
  },
  


}

function App() {
  return (
    <div style={styles.App}>
      <div style={styles.App.div}>
        <h3 style={styles.App.div.h3}>Sushi</h3>
        <div style={styles.App.div["nth-of-type(1)"]}>I prefer steak than sushi.</div>
        <div style={styles.App.div["nth-of-type:(2)"]}>$9.99</div>
      </div>
    </div>
  );
}

export default App;
