import React from 'react';
import Figure from '../models/figures/Figure';

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

function LostFigures({ title, figures }: LostFiguresProps): JSX.Element {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id} className="last_figure">
          {
            figure.logo
            && (
              <img
                src={figure.logo}
                alt={figure.name}
                width={20}
                height={20}
              />
            )
          }
          {' '}
          {figure.name}
        </div>
      ))}
    </div>
  );
}

// export default React.memo(LostFigures);
export default LostFigures;
