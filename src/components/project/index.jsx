export const Project = () => {
    return (
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-contain w-full rounded-t-lg max-h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://99neto.online/imgs/profiles/3941483a-ea49-4eb2-a008-63b6abd2dcef_hookform.jpg"
                alt="tela inicial aplicativo milkapp"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Aplicativo React Native com Expo e firebase
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Aplicação RN no qual foi desenvolvida usando hookform, yup para validação de dados e webview para iteração com graficos, além de trabalhar com dados de uma aplicação backend springboot sem a necessidade de firebase.
                </p>
            </div>
        </a>

    );
}