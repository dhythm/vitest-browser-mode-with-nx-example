import { render, screen } from '@testing-library/react';

import Foo from './foo';

const mockedIsOk = vi.hoisted(() => vi.fn().mockReturnValue(true));

vi.mock('./isOk', async (importActual) => {
  const actual = await importActual<typeof import('./isOk')>();
  return {
    ...actual,
    isOk: mockedIsOk,
  };
});

describe('Foo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Foo />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with isOk returns true', async () => {
    mockedIsOk.mockReturnValue(true);
    const { baseElement } = render(<Foo />);
    expect(await screen.findByText('Welcome to Foo!')).toBeInTheDocument();
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        
          
        
        


        <div>
          <div>
            <h1>
              Welcome to Foo!
            </h1>
          </div>
        </div>
      </body>
    `);
  });

  it('should render with isOk returns false', async () => {
    mockedIsOk.mockReturnValue(false);
    const { baseElement } = render(<Foo />);
    expect(await screen.findByText('Not Found...')).toBeInTheDocument();
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        
          
        
        


        <div>
          <div>
            <h1>
              Not Found...
            </h1>
          </div>
        </div>
      </body>
    `);
  });
});
