import React from "react";

export const NavBar = () => {
  return (
    <header className="z-40 fixed top-0 left-0 flex gap-4 w-full flex-row flex-nowrap items-center justify-between h-20 max-w-full px-4 sm:px-6 bg-transparent">
      <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border">
        <p>Logo</p>
      </div>
      <nav>
        <ul className="flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex">
          <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold data-[active=true]:text-primary">
            <a
              href=""
              className="mix-blend-difference relative items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex gap-2 text-inherit"
            >
              Portfolio
            </a>
          </li>
          <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold data-[active=true]:text-primary">
            <a
              href=""
              className="relative items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex gap-2 text-inherit"
            >
              About me
            </a>
          </li>
          <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold data-[active=true]:text-primary">
            <a
              href=""
              className="relative items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex gap-2 text-inherit"
            >
              My History
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a
          className="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none rounded-xl select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium w-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-foreground text-background"
          href=""
          role="button"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
