import { useState } from 'react';
import Stepper from '@components/Stepper';

interface Collaborator {
  email: string;
  role: string;
}
interface Business {
  name: string;
  tables: number;
  tableStatusOptions: string[];
  collaborators: Collaborator[];
}

export default function InitialConfig() {
  const [steps, setSteps] = useState([
    { id: '01', name: 'Nombre del establecimiento', href: '#', status: 'complete' },
    { id: '02', name: 'Mesas disponibles', href: '#', status: 'upcoming' },
    { id: '03', name: 'Miembros del equipo', href: '#', status: 'upcoming' }
  ]);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [business, setBusiness] = useState<Business>({
    name: '',
    tables: 0,
    tableStatusOptions: [],
    collaborators: []
  });

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep.id);
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setCurrentStep(nextStep);
      // Update step statuses (optional, based on your logic)
      const updatedSteps = steps.map((step) => {
        if (step.id === nextStep.id) {
          return { ...step, status: 'current' };
        } else if (step.id === currentStep.id) {
          return { ...step, status: 'complete' };
        } else {
          return step;
        }
      });
      setSteps(updatedSteps);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep.id);
    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1];
      setCurrentStep(prevStep);
      // Update step statuses (optional, based on your logic)
      const updatedSteps = steps.map((step) => {
        if (step.id === prevStep.id) {
          return { ...step, status: 'current' };
        } else if (step.id === currentStep.id) {
          return { ...step, status: 'upcoming' };
        } else {
          return step;
        }
      });
      setSteps(updatedSteps);
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <Stepper steps={steps} />
      <div className="flex w-full h-screen justify-center ">
        <div className="w-1/3 flex flex-col justify-between h-1/2 px-6 lg:px-8 space-y-12">
          <div className="flex justify-center mt-10 ">
            <div className="flex-col">
              {currentStep.id === '01' && <StepOne />}
              {currentStep.id === '02' && <StepTwo />}
              {currentStep.id === '03' && <StepThree />}
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            {currentStep.id !== '01' && (
              <button
                onClick={handleBack}
                className="flex max-w-sm text-orange-600 border border-orange-600 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6"
                style={{ width: '120px' }}
              >
                {'Atras'}
              </button>
            )}
            {currentStep.id !== '03' && (
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-between max-w-sm text-white bg-orange-600 hover:bg-orange-500 rounded-md font-semibold px-3 py-1.5 text-sm leading-6"
                style={{ width: '120px' }}
              >
                {'Siguiente'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
            {currentStep.id == '03' && (
              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-between max-w-sm text-white bg-orange-600 hover:bg-orange-500 rounded-md font-semibold px-3 py-1.5 text-sm leading-6"
                style={{ width: '120px' }}
              >
                {'Finalizar'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const StepOne = () => {
  return (
    <>
      <div className="flex justify-center items-center h-44 sm:mx-auto sm:w-full  mb-8 sm:max-w-sm">
        <h1 className="text-7xl font-quicksand">¡Hola!</h1>
      </div>
      <p className="block text-xl leading-6 text-gray-900 mb-10">Indicanos el nombre de tu establecimiento</p>
      <div className="flex justify-center mt-4">
        <input
          id="establecimiento"
          type="establecimiento"
          autoComplete="establecimiento"
          required
          className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

const StepTwo = () => {
  return (
    <>
      <div className="flex justify-center mb-8">
        <img className="w-auto h-44" src="tables3.svg" alt="" />
      </div>
      <p className="block text-xl leading-6 text-gray-900 mb-10">Cantidad de mesas disponibles</p>
      <div className="flex justify-center mt-4">
        <input
          id="tables"
          type="tables"
          autoComplete="tables"
          required
          className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <div className="flex justify-center mb-8">
        <img className="w-auto h-44" src="team3.svg" alt="" />
      </div>
      <p className="block text-xl leading-6 text-gray-900 mb-10">Agregue a los miembros de su equipo</p>
      <div className="flex justify-center mt-4">
        <input
          id="tables"
          type="tables"
          autoComplete="tables"
          required
          className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};
