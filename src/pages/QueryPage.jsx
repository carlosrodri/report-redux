import { Box, Heading } from "@chakra-ui/react";
import { Card, Title, ScatterChart } from "@tremor/react";

const chartdata = [
  {
    Country: "Argentina",
    Life_expectancy: 76.3,
    GDP: 13467.1236,
    Population: 43417765,
  },
  {
    Country: "Australia",
    Life_expectancy: 82.8,
    GDP: 56554.3876,
    Population: 23789338,
  },
  {
    Country: "Austria",
    Life_expectancy: 81.5,
    GDP: 43665.947,
    Population: 8633169,
  }
];

const QueryPage = () => {
  return (
    <>
      <Box w='81%' top='0' position='fixed' p='6' rounded='lg' m='35px' border='2px' bg='#111827'>
        <Heading color='white'>Menu 1</Heading>
      </Box>
      <Box display='flex' p='35px'>
        <Card>
          <Title>Query 1</Title>
          <ScatterChart
            className="h-80 mt-6 -ml-2"
            yAxisWidth={50}
            data={chartdata}
            category="Country"
            x="GDP"
            y="Life_expectancy"
            size="Population"
            showOpacity={true}
            minYValue={60}
            showLegend={false}
          />
        </Card>
      </Box>
    </>
  );
};

export default QueryPage;
