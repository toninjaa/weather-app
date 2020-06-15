import * as React from 'react';

interface Props {
  data: {
    main: {
      temp: string,
    }
  },
  idx: number,
}

function DayContainer(props: Props) {
  const { data, idx } = props;
  return (
    <React.Fragment key={idx}>
      <h2>Temp</h2>
      <p>{data.main.temp}</p>
    </React.Fragment>
  )
}

export default DayContainer;