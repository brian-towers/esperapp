import { useState } from 'react';
import Stepper from '@components/Stepper';
import { XCircleIcon } from '@heroicons/react/outline';

const stepss = ['Nombre del establecimiento', 'Mesas disponibles', 'Estados de las mesas', 'Miembros del equipo'];
const tableStatusOptions = ['Disponible', 'Ocupada', 'Reservada', 'Estado 1', 'Estado 2', 'Estado 3'];

const steps = [
  { id: '01', name: 'Nombre del establecimiento', href: '#', status: 'complete' },
  { id: '02', name: 'Mesas disponibles', href: '#', status: 'current' },
  { id: '03', name: 'Estados de las mesas', href: '#', status: 'upcoming' },
  { id: '04', name: 'Miembros del equipo', href: '#', status: 'upcoming' }
];

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
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [business, setBusiness] = useState<Business>({
    name: '',
    tables: 0,
    tableStatusOptions: [],
    collaborators: []
  });

  const handleNext = () => {};

  const handleBack = () => {};

  const handleReset = () => {};

  const handleTableStatus = (status: string) => {
    setBusiness((prevBusiness: Business) => ({
      ...prevBusiness,
      tableStatusOptions: [...prevBusiness.tableStatusOptions, status]
    }));
  };

  return (
    <>
      <Stepper steps={steps} />
      <div className="flex w-full justify-center ">
        <div className="flex min-h-full w-1/3 flex-col justify-center px-6 py-12 lg:px-8">
          <StepOne />
          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="flex max-w-sm text-orange-600 border border-orange-600 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 "
            >
              {'Atras'}
            </button>
            <button
              type="submit"
              className="inline-flex items-center max-w-sm text-white bg-orange-600 hover:bg-orange-500 rounded-md font-semibold px-3 py-1.5 text-sm leading-6"
            >
              {'Siguiente'}
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
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const StepOne = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col">
        <div className="sm:mx-auto sm:w-full flex justify-center sm:max-w-sm">
          <h1 className="text-7xl font-quicksand">¡Hola!</h1>
        </div>
        <p className="block text-2xl leading-6 text-gray-900 mt-8 ">Indicanos el nombre de tu establecimiento</p>
        <div className="flex justify-center mt-8">
          <input
            id="establecimiento"
            type="establecimiento"
            autoComplete="establecimiento"
            required
            className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col  mt-8">
        <label htmlFor="tables" className="block text-xl leading-6 text-gray-900">
          Cantidad de mesas disponibles
        </label>
        <div className="flex justify-center mt-4">
          <input
            id="tables"
            type="tables"
            autoComplete="tables"
            required
            className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

const StepThree = ({ handleTableStatus }: { handleTableStatus: (status: string) => void }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col  mt-8">
        <label htmlFor="tables" className="block text-xl leading-6 text-gray-900">
          Seleccione los estados posibles de las mesas
        </label>
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-3 gap-4">
            {tableStatusOptions.map((status) => {
              return (
                <button
                  onClick={() => handleTableStatus(status)}
                  className="flex w-full text-white bg-orange-600 hover:bg-orange-500 rounded-md justify-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
                  key={status} // Add a unique key for the button
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepFour = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col  mt-8">
        <label htmlFor="tables" className="block text-xl leading-6 text-gray-900">
          Agregue a los miembros de su equipo
        </label>
        <div className="flex justify-center mt-4">
          <input
            id="tables"
            type="tables"
            autoComplete="tables"
            required
            className="block w-2/3 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
