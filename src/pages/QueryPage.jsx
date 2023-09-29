import { Box, Button, Heading } from "@chakra-ui/react";
import { Card, Title, BarChart } from "@tremor/react";
import { useTopSubjectQuery } from "api/queryApi";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const QueryPage = () => {

  const [dataQuery, setDataQuery] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const { data, isSuccess } = useTopSubjectQuery()

  useEffect(() => {
    if (isSuccess) {
      setCsvData(data)
      const dataToRender = data.map((item) => {
        if (item.Asignatura) {
          return {
            name: item.Asignatura.trim() || 'Otro',
            'Cantidad de asistencia por asignatura': item.Total,
          }
        }
      })
      setDataQuery(dataToRender)
    }
  }, [isSuccess]);

  return (
    <>
      {isSuccess ? <>

        <Box w='81%' top='0' position='fixed' p='6' rounded='lg' m='35px' border='2px' bg='#111827'>
          <Heading color='white'>Asistencia por asignatura</Heading>
        </Box>
        <Box display='flex' p='35px'>
          <Card>
            <Title>Cantidad de asistentes por asignatura</Title>
            <BarChart
              className="mt-6"
              data={dataQuery}
              index="name"
              categories={["Cantidad de asistencia por asignatura"]}
              colors={["blue"]}
              yAxisWidth={48}
            />
          </Card>
        </Box>
        <Button width={'80%'} margin={'auto'}>
          <CSVLink data={csvData}>Descargar reporte</CSVLink>
        </Button>
      </> : <p>Error</p>}
    </>

  );
};

export default QueryPage;
