"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";
import {
    ChevronDown,
    FileCode2,
    FileJson,
    FileText,
    FolderOpen,
    FolderRoot,
    FolderSearch,
    FolderSymlink,
    LayoutGrid,
    Lock,
    Settings2,
    ShieldCheck,
    Sparkles,
    Users,
    Wrench,
} from "lucide-react";
import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

type ExplorerNode = {
    id: string;
    name: string;
    type: "folder" | "file";
    iconColor: string;
    icon: React.ComponentType<{ className?: string }>;
    children?: ExplorerNode[];
    code?: string;
};

function fileNode(id: string, name: string, language: string, code: string): ExplorerNode {
    return {
        id,
        name,
        type: "file",
        icon: language === "html" ? FileText : language === "scss" ? FileJson : FileCode2,
        iconColor: "text-text/65",
        code,
    };
}

const architectureTree: ExplorerNode = {
    id: "src",
    name: "src",
    type: "folder",
    icon: FolderOpen,
    iconColor: "text-accent",
    children: [
        {
            id: "src/app",
            name: "app",
            type: "folder",
            icon: LayoutGrid,
            iconColor: "text-accent",
            children: [
                {
                    id: "src/app/core",
                    name: "core",
                    type: "folder",
                    icon: FolderRoot,
                    iconColor: "text-sky-300",
                    children: [
                        { id: "src/app/core/guards", name: "guards", type: "folder", icon: ShieldCheck, iconColor: "text-sky-200", children: [fileNode("src/app/core/guards/auth.guard.ts", "auth.guard.ts", "ts", `import { inject } from '@angular/core';\nimport { CanActivateFn, Router } from '@angular/router';\nimport { AuthService } from '../services/auth.service';\n\nexport const authGuard: CanActivateFn = () => {\n    const authService = inject(AuthService);\n    const router = inject(Router);\n\n    if (authService.isAuthenticated()) {\n        return true;\n    }\n\n    router.navigate(['/auth/login']);\n    return false;\n};`)] },
                        { id: "src/app/core/interceptors", name: "interceptors", type: "folder", icon: Sparkles, iconColor: "text-sky-200", children: [fileNode("src/app/core/interceptors/auth.interceptor.ts", "auth.interceptor.ts", "ts", `import { HttpInterceptorFn } from '@angular/common/http';\nimport { inject } from '@angular/core';\nimport { AuthService } from '../services/auth.service';\n\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n    const authService = inject(AuthService);\n    const token = authService.getToken();\n\n    if (!token) {\n        return next(req);\n    }\n\n    return next(req.clone({\n        setHeaders: { Authorization: 'Bearer ' + token },\n    }));\n};`)] },
                        { id: "src/app/core/services", name: "services", type: "folder", icon: Wrench, iconColor: "text-sky-200", children: [fileNode("src/app/core/services/api.service.ts", "api.service.ts", "ts", `import { HttpClient } from '@angular/common/http';\nimport { inject, Injectable } from '@angular/core';\nimport { Observable } from 'rxjs';\n\n@Injectable({ providedIn: 'root' })\nexport class ApiService {\n    private readonly http = inject(HttpClient);\n    private readonly baseUrl = '/api';\n\n    get<T>(endpoint: string): Observable<T> {\n        return this.http.get<T>(this.baseUrl + endpoint);\n    }\n}`)] },
                        { id: "src/app/core/models", name: "models", type: "folder", icon: Users, iconColor: "text-sky-200", children: [fileNode("src/app/core/models/user.model.ts", "user.model.ts", "ts", `export interface User {\n    id: string;\n    firstName: string;\n    lastName: string;\n    email: string;\n    role: 'admin' | 'editor' | 'viewer';\n}`)] },
                        fileNode("src/app/core/core.module.ts", "core.module.ts", "ts", `import { NgModule, Optional, SkipSelf } from '@angular/core';\n\n@NgModule()\nexport class CoreModule {\n    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {\n        if (parentModule) {\n            throw new Error('CoreModule should only be imported once.');\n        }\n    }\n}`),
                    ],
                },
                {
                    id: "src/app/shared",
                    name: "shared",
                    type: "folder",
                    icon: FolderSymlink,
                    iconColor: "text-violet-300",
                    children: [
                        { id: "src/app/shared/components", name: "components", type: "folder", icon: LayoutGrid, iconColor: "text-violet-200", children: [{ id: "src/app/shared/components/button", name: "button", type: "folder", icon: FolderOpen, iconColor: "text-violet-200", children: [fileNode("src/app/shared/components/button/button.component.ts", "button.component.ts", "ts", `import { ChangeDetectionStrategy, Component, input } from '@angular/core';\n\n@Component({\n    selector: 'app-button',\n    templateUrl: './button.component.html',\n    styleUrl: './button.component.scss',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ButtonComponent {\n    readonly variant = input<'primary' | 'secondary'>('primary');\n}`), fileNode("src/app/shared/components/button/button.component.html", "button.component.html", "html", `<button class="button" [class.button--secondary]="variant() === 'secondary'">\n    <ng-content />\n</button>`), fileNode("src/app/shared/components/button/button.component.scss", "button.component.scss", "scss", `.button {\n    border: 0;\n    border-radius: 999px;\n    padding: 0.75rem 1.25rem;\n    font-weight: 600;\n    background: var(--color-accent);\n    color: #0a0a0a;\n}\n\n.button--secondary {\n    background: transparent;\n    color: var(--color-accent);\n    border: 1px solid var(--color-accent);\n}`)] }] },
                        { id: "src/app/shared/directives", name: "directives", type: "folder", icon: Sparkles, iconColor: "text-violet-200", children: [fileNode("src/app/shared/directives/autofocus.directive.ts", "autofocus.directive.ts", "ts", `import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';\n\n@Directive({ selector: '[appAutofocus]' })\nexport class AutofocusDirective implements AfterViewInit {\n    private readonly elementRef = inject(ElementRef<HTMLInputElement>);\n\n    ngAfterViewInit(): void {\n        this.elementRef.nativeElement.focus();\n    }\n}`)] },
                        { id: "src/app/shared/pipes", name: "pipes", type: "folder", icon: FileText, iconColor: "text-violet-200", children: [fileNode("src/app/shared/pipes/format-date.pipe.ts", "format-date.pipe.ts", "ts", `import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({ name: 'formatDate', standalone: true })\nexport class FormatDatePipe implements PipeTransform {\n    transform(value: string): string {\n        return new Intl.DateTimeFormat('es-PE', { dateStyle: 'medium' }).format(new Date(value));\n    }\n}`)] },
                        fileNode("src/app/shared/shared.module.ts", "shared.module.ts", "ts", `import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ButtonComponent } from './components/button/button.component';\n\n@NgModule({\n    imports: [CommonModule],\n    declarations: [ButtonComponent],\n    exports: [ButtonComponent],\n})\nexport class SharedModule {}`),
                    ],
                },
                {
                    id: "src/app/features",
                    name: "features",
                    type: "folder",
                    icon: FolderSearch,
                    iconColor: "text-green-300",
                    children: [
                        { id: "src/app/features/auth", name: "auth", type: "folder", icon: Lock, iconColor: "text-green-200", children: [{ id: "src/app/features/auth/pages", name: "pages", type: "folder", icon: FolderOpen, iconColor: "text-green-200", children: [{ id: "src/app/features/auth/pages/login", name: "login", type: "folder", icon: FolderOpen, iconColor: "text-green-200", children: [fileNode("src/app/features/auth/pages/login/login.component.ts", "login.component.ts", "ts", `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';\nimport { FormBuilder, Validators } from '@angular/forms';\nimport { AuthService } from '../../services/auth.service';\n\n@Component({\n    selector: 'app-login',\n    templateUrl: './login.component.html',\n    styleUrl: './login.component.scss',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class LoginComponent {\n    private readonly fb = inject(FormBuilder);\n    private readonly authService = inject(AuthService);\n\n    readonly form = this.fb.nonNullable.group({\n        email: ['', [Validators.required, Validators.email]],\n        password: ['', [Validators.required]],\n    });\n\n    submit(): void {\n        if (this.form.invalid) return;\n        this.authService.login(this.form.getRawValue()).subscribe();\n    }\n}`), fileNode("src/app/features/auth/pages/login/login.component.html", "login.component.html", "html", `<section class="login-page">\n    <form [formGroup]="form" (ngSubmit)="submit()">\n        <input type="email" formControlName="email" placeholder="Correo" />\n        <input type="password" formControlName="password" placeholder="Contraseña" />\n        <app-button>Ingresar</app-button>\n    </form>\n</section>`), fileNode("src/app/features/auth/pages/login/login.component.scss", "login.component.scss", "scss", `.login-page {\n    display: grid;\n    place-items: center;\n    min-height: 100dvh;\n}\n\nform {\n    display: grid;\n    gap: 1rem;\n    width: min(100%, 24rem);\n}`)] }] }, { id: "src/app/features/auth/services", name: "services", type: "folder", icon: Wrench, iconColor: "text-green-200", children: [fileNode("src/app/features/auth/services/auth.service.ts", "auth.service.ts", "ts", `import { inject, Injectable } from '@angular/core';\nimport { Observable } from 'rxjs';\nimport { ApiService } from '../../../core/services/api.service';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthService {\n    private readonly api = inject(ApiService);\n\n    login(payload: { email: string; password: string }): Observable<void> {\n        return this.api.get<void>('/auth/login');\n    }\n\n    isAuthenticated(): boolean {\n        return Boolean(localStorage.getItem('token'));\n    }\n\n    getToken(): string | null {\n        return localStorage.getItem('token');\n    }\n}`)] }, fileNode("src/app/features/auth/auth.routes.ts", "auth.routes.ts", "ts", `import { Routes } from '@angular/router';\nimport { LoginComponent } from './pages/login/login.component';\n\nexport const AUTH_ROUTES: Routes = [\n    { path: 'login', component: LoginComponent },\n];`), fileNode("src/app/features/auth/auth.module.ts", "auth.module.ts", "ts", `import { NgModule } from '@angular/core';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { SharedModule } from '../../shared/shared.module';\nimport { LoginComponent } from './pages/login/login.component';\n\n@NgModule({\n    imports: [ReactiveFormsModule, SharedModule],\n    declarations: [LoginComponent],\n})\nexport class AuthModule {}`)] },
                        { id: "src/app/features/dashboard", name: "dashboard", type: "folder", icon: Users, iconColor: "text-green-200", children: [{ id: "src/app/features/dashboard/pages", name: "pages", type: "folder", icon: FolderOpen, iconColor: "text-green-200", children: [fileNode("src/app/features/dashboard/pages/dashboard.component.ts", "dashboard.component.ts", "ts", `import { ChangeDetectionStrategy, Component } from '@angular/core';\n\n@Component({\n    selector: 'app-dashboard',\n    template: '<p>Dashboard works</p>',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DashboardComponent {}`)] }, fileNode("src/app/features/dashboard/dashboard.routes.ts", "dashboard.routes.ts", "ts", `import { Routes } from '@angular/router';\nimport { DashboardComponent } from './pages/dashboard.component';\n\nexport const DASHBOARD_ROUTES: Routes = [\n    { path: '', component: DashboardComponent },\n];`)] },
                    ],
                },
                { id: "src/app/layout", name: "layout", type: "folder", icon: FolderOpen, iconColor: "text-pink-300", children: [{ id: "src/app/layout/header", name: "header", type: "folder", icon: FolderOpen, iconColor: "text-pink-200", children: [fileNode("src/app/layout/header/header.component.ts", "header.component.ts", "ts", `import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-header',\n    template: '<header>Header</header>',\n})\nexport class HeaderComponent {}`)] }, { id: "src/app/layout/sidebar", name: "sidebar", type: "folder", icon: FolderOpen, iconColor: "text-pink-200", children: [fileNode("src/app/layout/sidebar/sidebar.component.ts", "sidebar.component.ts", "ts", `import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-sidebar',\n    template: '<aside>Sidebar</aside>',\n})\nexport class SidebarComponent {}`)] }] },
                fileNode("src/app/app.component.ts", "app.component.ts", "ts", `import { ChangeDetectionStrategy, Component } from '@angular/core';\n\n@Component({\n    selector: 'app-root',\n    template: '<router-outlet />',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class AppComponent {}`),
                fileNode("src/app/app.config.ts", "app.config.ts", "ts", `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';\nimport { provideRouter } from '@angular/router';\nimport { appRoutes } from './app.routes';\n\nexport const appConfig: ApplicationConfig = {\n    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes)],\n};`),
                fileNode("src/app/app.routes.ts", "app.routes.ts", "ts", `import { Routes } from '@angular/router';\n\nexport const appRoutes: Routes = [\n    {\n        path: '',\n        loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),\n    },\n    {\n        path: 'auth',\n        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),\n    },\n];`),
            ],
        },
        { id: "src/assets", name: "assets", type: "folder", icon: FolderOpen, iconColor: "text-yellow-300" },
        { id: "src/environments", name: "environments", type: "folder", icon: Settings2, iconColor: "text-orange-300" },
        fileNode("src/main.ts", "main.ts", "ts", `import { bootstrapApplication } from '@angular/platform-browser';\nimport { appConfig } from './app/app.config';\nimport { AppComponent } from './app/app.component';\n\nbootstrapApplication(AppComponent, appConfig).catch((error) => {\n    console.error(error);\n});`),
    ],
};

function collectFileIds(node: ExplorerNode): string[] {
    if (node.type === "file") return [node.id];
    return node.children?.flatMap(collectFileIds) ?? [];
}

function buildDefaultExpanded(node: ExplorerNode, targetFileId: string, expanded = new Set<string>()): Set<string> {
    if (node.type === "folder") {
        const containsTarget = (node.children ?? []).some((child) => collectFileIds(child).includes(targetFileId) || child.id === targetFileId);
        if (containsTarget || node.id === "src" || node.id === "src/app" || node.id === "src/app/core") {
            expanded.add(node.id);
            node.children?.forEach((child) => buildDefaultExpanded(child, targetFileId, expanded));
        }
    }
    return expanded;
}

function highlightLine(line: string): ReactNode[] {
    const tokens = line.split(/(import|from|export|const|class|return|if|true|false|new|readonly|private|public|@Component|@NgModule|@Injectable|selector|templateUrl|styleUrl|template|providers|path|loadChildren|component|changeDetection|interface)/g);
    return tokens.map((token, index) => {
        if (!token) return null;
        let className = "text-text/78";
        if (/^(@Component|@NgModule|@Injectable)$/.test(token)) className = "text-pink-300";
        else if (/^(import|from|export|const|class|return|if|true|false|new|readonly|private|public|interface)$/.test(token)) className = "text-sky-300";
        else if (/^(selector|templateUrl|styleUrl|template|providers|path|loadChildren|component|changeDetection)$/.test(token)) className = "text-amber-300";
        else if (/^'.*'$|^".*"$/.test(token)) className = "text-green-300";
        return <span key={`${token}-${index}`} className={className}>{token}</span>;
    });
}

function ExplorerItem({ node, depth, expandedIds, toggleFolder, selectedFileId, onSelectFile }: { node: ExplorerNode; depth: number; expandedIds: Set<string>; toggleFolder: (id: string) => void; selectedFileId: string; onSelectFile: (id: string) => void; }) {
    const isFolder = node.type === "folder";
    const isExpanded = expandedIds.has(node.id);
    const Icon = node.icon;
    const isSelected = node.id === selectedFileId;
    return (
        <div>
            <button
                type="button"
                onClick={() => (isFolder ? toggleFolder(node.id) : onSelectFile(node.id))}
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition duration-200 ${isSelected ? "bg-accent/10 text-text" : "text-text/72 hover:bg-surface/65 hover:text-text"}`}
                style={{ paddingLeft: `${depth * 18 + 12}px` }}
            >
                {isFolder ? <ChevronDown className={`h-4 w-4 shrink-0 text-text/45 transition duration-200 ${isExpanded ? "rotate-0" : "-rotate-90"}`} /> : <span className="h-4 w-4 shrink-0" />}
                <Icon className={`h-4 w-4 shrink-0 ${node.iconColor}`} />
                <span className="text-sm font-medium">{node.name}</span>
            </button>
            {isFolder ? (
                <AnimatePresence initial={false}>
                    {isExpanded ? (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: "easeOut" }} className="overflow-hidden">
                            <div className="relative">
                                {depth < 5 ? <span className="absolute top-0 bottom-0 w-px bg-border/60" style={{ left: `${depth * 18 + 19}px` }} /> : null}
                                {node.children?.map((child) => <ExplorerItem key={child.id} node={child} depth={depth + 1} expandedIds={expandedIds} toggleFolder={toggleFolder} selectedFileId={selectedFileId} onSelectFile={onSelectFile} />)}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            ) : null}
        </div>
    );
}

export default function AngularArchitecturePracticeSection() {
    const allFileIds = useMemo(() => collectFileIds(architectureTree), []);
    const initialFileId = "src/app/core/services/api.service.ts";
    const [selectedFileId, setSelectedFileId] = useState(initialFileId);
    const [expandedIds, setExpandedIds] = useState<Set<string>>(() => buildDefaultExpanded(architectureTree, initialFileId));
    const fileMap = useMemo(() => {
        const map = new Map<string, ExplorerNode>();
        const visit = (node: ExplorerNode) => {
            map.set(node.id, node);
            node.children?.forEach(visit);
        };
        visit(architectureTree);
        return map;
    }, []);
    const selectedFile = fileMap.get(selectedFileId);
    const toggleFolder = (id: string) => {
        setExpandedIds((current) => {
            const next = new Set(current);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Arquitectura Frontend"
                        title="Explore una Arquitectura Angular escalable."
                        description="Mapa de estructura pensado para crecer con orden: carpetas con responsabilidades claras, features aisladas y código fácil de seguir."
                        className="max-w-4xl"
                    />

                    <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.25fr)]">
                        <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface/35 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                            <div className="border-b border-border/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-text/55">
                                Angular Architecture Explorer
                            </div>
                            <div className="max-h-[720px] overflow-auto p-3">
                                <ExplorerItem node={architectureTree} depth={0} expandedIds={expandedIds} toggleFolder={toggleFolder} selectedFileId={selectedFileId} onSelectFile={setSelectedFileId} />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-[#0b0f14] shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 font-mono text-xs text-text/55">
                                <span>{selectedFile?.name ?? "preview.ts"}</span>
                                <span>{allFileIds.length} files</span>
                            </div>
                            <div className="overflow-auto p-4 font-mono text-sm leading-7">
                                {selectedFile?.code?.split("\n").map((line, index) => (
                                    <div key={`${selectedFile.id}-${index}`} className="grid grid-cols-[40px_1fr] gap-4">
                                        <span className="select-none text-right text-text/30">{index + 1}</span>
                                        <code className="whitespace-pre-wrap break-words">{highlightLine(line)}</code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-text/68 sm:text-lg">
                        Esta estructura permite separar responsabilidades, mantener el código organizado y escalar la aplicación sin crear complejidad innecesaria.
                    </p>
                </ScrollReveal>
            </Container>
        </section>
    );
}

