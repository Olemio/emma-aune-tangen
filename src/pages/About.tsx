export default function About() {
    return (
        <main className="mx-auto max-w-[1400px] px-5">
            <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col justify-center items-center gap-8">
                    <h1 className="text-3xl text-amber-700">Hello!</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div>
                    <img
                        className=""
                        src="/src/other-images/emma-sitting-in-garden.jpg"
                        alt=""
                    />
                </div>
            </div>
        </main>
    );
}
