const fs = require('fs');

const file = 'app/book-appointment/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove activeStep
content = content.replace(/const \[activeStep, setActiveStep\] = useState\(1\);\n/g, '');
content = content.replace(/const nextStep = \(\) => {[\s\S]*?};\n/g, '');
content = content.replace(/const prevStep = \(\) => {[\s\S]*?};\n/g, '');

// 2. Clear default selections
content = content.replace(/service: 'cosmetic',/g, "service: '',");
content = content.replace(/time: 'afternoon',/g, "time: '',");

// 3. Remove Progress Bar and Step text
content = content.replace(/{\/\* Progress Indicator \*\/}[\s\S]*?<\/div>\n\n/g, '');

// 4. Change animations to always true
content = content.replace(/animate={activeStep >= 2}/g, 'animate={true}');
content = content.replace(/animate={activeStep === 3}/g, 'animate={true}');

// 5. Add id to form
content = content.replace(/<form className="space-y-12" onSubmit={handleSubmit}>/g, '<form id="appointment-form" className="space-y-12" onSubmit={handleSubmit}>');

// 6. Add required to inputs
content = content.replace(/onChange={handleChange}\n\s*\/>/g, 'onChange={handleChange}\n                    required\n                  />');
content = content.replace(/type="radio"\n\s*value=/g, 'type="radio"\n                        required\n                        value=');
content = content.replace(/type="text"\n\s*\/>/g, 'type="text"\n                  required\n                />');
content = content.replace(/type="tel"\n\s*\/>/g, 'type="tel"\n                  required\n                />');
content = content.replace(/type="email"\n\s*\/>/g, 'type="email"\n                  required\n                />');

// Fix the date input required since it has a different format
content = content.replace(/min={new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\]}\n\s*onChange=/g, "min={new Date().toISOString().split('T')[0]}\n                    required\n                    onChange=");

// 7. Update sticky button
const buttonRegex = /<button\s+type="button"[\s\S]*?<\/button>/;
const newButton = `<button
            type="submit"
            form="appointment-form"
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
          >
            Proceed to Appointment
          </button>`;
content = content.replace(buttonRegex, newButton);

fs.writeFileSync(file, content);
console.log('Fixed form!');
