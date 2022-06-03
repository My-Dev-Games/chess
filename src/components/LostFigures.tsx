import React from 'react';
import Figure from '../models/figures/Figure';

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

function LostFigures({ title, figures }: LostFiguresProps): JSX.Element {
  return (
    <div className="lost">
      {title}
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}
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
        </div>
      ))}
    </div>
  );
}

export default React.memo(LostFigures);
