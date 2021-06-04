(() => {
  const user = {
    name: 'Alex Kates',
    preferences: {
      darkMode: true,
    },
    interests: ['javascript', 'aws', 'extreme programming']
  };

  const {
    name,
    preferences: { darkMode },
    interests: [interest1, interest2, interest3],
  } = user;

  console.log('Name:', name);            // Name: Alex Kates 
  console.log('Dark Mode:', darkMode);   // Dark Mode: true
  console.log('Interest 1:', interest1); // Interest 1: javascript
  console.log('Interest 2:', interest2); // Interest 2: aws
  console.log('Interest 3:', interest3); // Interest 3: extreme programming
})();