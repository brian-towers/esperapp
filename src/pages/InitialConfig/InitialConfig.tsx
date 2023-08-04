import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Card from '@components/Card';

const steps = ['Nombre del establecimiento', 'Mesas disponibles', 'Estados de las mesas', 'Miembros del equipo'];
const tableStatusOptions = ['Disponible', 'Ocupada', 'Reservada', 'Estado 1', 'Estado 2', 'Estado 3'];

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
  const [activeStep, setActiveStep] = useState(0);
  const [business, setBusiness] = useState<Business>({
    name: '',
    tables: 0,
    tableStatusOptions: [],
    collaborators: []
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleTableStatus = (status: string) => {
    setBusiness((prevBusiness: Business) => ({
      ...prevBusiness,
      tableStatusOptions: [...prevBusiness.tableStatusOptions, status]
    }));
  };

  return (
    <>
      <div className="flex min-h-full w-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="logo mx-auto h-10 w-auto" src="logo.png" alt="EsperaApp" />
        </div>
        <div className="flex justify-center sm:mx-auto sm:w-full ">
          <Card>
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <>
                  <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </>
              ) : (
                <>
                  {activeStep == 0 && <StepOne />}
                  {activeStep == 1 && <StepTwo />}
                  {activeStep == 2 && <StepThree handleTableStatus={handleTableStatus} />}
                  {activeStep == 3 && <StepFour />}

                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                      Atrás
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <button
                      className="flex  text-white bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-md justify-between items-center font-semibold px-3 py-1.5 text-sm leading-6 shadow-md"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </button>
                  </Box>
                </>
              )}
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
}

const StepOne = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col  mt-8">
        <label htmlFor="establecimiento" className="block text-xl leading-6 text-gray-900">
          Indique el nombre de su establecimiento
        </label>
        <div className="flex justify-center mt-4">
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
