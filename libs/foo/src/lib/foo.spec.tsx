import { render, screen } from '@testing-library/react';

import Foo from './foo';

const mockedIsOk = vi.fn().mockReturnValue(true);

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
      <body
        data-vitest-body=""
        style="
            width: 100%;
            height: 100%;
            transform: scale(1);
            transform-origin: left top;
          "
      >


        <script
          type="module"
        >

      __vitest_browser_runner__.runningFiles = ["/Users/dhythm/local/vitest-browser-mode-with-nx-example/libs/foo/src/lib/foo.spec.tsx"]
      __vitest_browser_runner__.iframeId = "/Users/dhythm/local/vitest-browser-mode-with-nx-example/libs/foo/src/lib/foo.spec.tsx"
      __vitest_browser_runner__.runTests(__vitest_browser_runner__.runningFiles)

        </script>




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
      <body
        data-vitest-body=""
        style="
            width: 100%;
            height: 100%;
            transform: scale(1);
            transform-origin: left top;
          "
      >


        <script
          type="module"
        >

      __vitest_browser_runner__.runningFiles = ["/Users/dhythm/local/vitest-browser-mode-with-nx-example/libs/foo/src/lib/foo.spec.tsx"]
      __vitest_browser_runner__.iframeId = "/Users/dhythm/local/vitest-browser-mode-with-nx-example/libs/foo/src/lib/foo.spec.tsx"
      __vitest_browser_runner__.runTests(__vitest_browser_runner__.runningFiles)

        </script>




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
