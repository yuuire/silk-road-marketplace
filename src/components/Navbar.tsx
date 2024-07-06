import { meta, repositories } from "./constants";

export function Navbar() {
    const repos = repositories.length;

    return (
        <nav class="w-72 pt-3 border-r-2 border-r-neutral-200 box-border">
            <ul>
                <li><a class="text-brand hover:underline text-xl" href="/">Home</a></li>
                <li><a class="text-brand hover:underline text-xl" href="/links">Links</a></li>
                <li>
                    <a class="text-brand hover:underline text-xl" href="/projects">Projects</a>
                    <i class="text-neutral-400 ml-1">{repos}</i>
                    <ul class="ml-7">
                        <li>
                            <a class="text-brand hover:underline text-xl" href={meta.repo}>Website</a>
                            {/* <i class="text-neutral-400 ml-1">1 // stars</i> */}
                        </li>
                        <li>
                            <a class="text-brand hover:underline text-xl" href={meta.guide}>Guide</a>
                            {/* <i class="text-neutral-400 ml-1">0</i> */}
                        </li>
                    </ul>
                </li>
                <li><a class="text-brand hover:underline text-xl" href={"https://blog." + meta.plainurl}>Blog</a></li>
                <li><a class="text-brand hover:underline text-xl" href={"https://github.com/" + meta.author}>GitHub</a></li>
                <li><a class="text-brand hover:underline text-xl" href="/donate">Donate</a></li>
                <li><a class="text-brand hover:underline text-xl" href={"mailto:" + meta.email }>Email</a></li>
            </ul>
        </nav>
    );
}
