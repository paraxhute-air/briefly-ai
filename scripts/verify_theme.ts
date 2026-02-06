import { readFileSync } from 'fs';

const providersPath = 'app/providers.tsx';
const globalsCssPath = 'app/globals.css';

try {
  const providersContent = readFileSync(providersPath, 'utf8');
  const globalsCssContent = readFileSync(globalsCssPath, 'utf8');

  let errors = [];

  // Check providers.tsx
  if (!providersContent.includes('defaultTheme="light"')) {
    errors.push('Providers.tsx: defaultTheme should be "light"');
  }
  if (!providersContent.includes('enableSystem={false}') && providersContent.includes('enableSystem')) {
     // Check if enableSystem is present without {false} (default is true if just 'enableSystem')
     // But we changed it to enableSystem={false}
     if(!providersContent.includes('enableSystem={false}'))
        errors.push('Providers.tsx: enableSystem should be explicitly set to {false}');
  }

  // Check globals.css
  if (globalsCssContent.includes('@media (prefers-color-scheme: dark)')) {
    errors.push('globals.css: Should not contain @media (prefers-color-scheme: dark) block');
  }
  if (!globalsCssContent.includes('.dark {')) {
    errors.push('globals.css: Should contain .dark class definition');
  }

  if (errors.length > 0) {
    console.error('Verification Failed:');
    errors.forEach(e => console.error('- ' + e));
    process.exit(1);
  } else {
    console.log('Verification Passed: Theme configuration is correct.');
  }

} catch (err) {
  console.error('Error reading files:', err);
  process.exit(1);
}
