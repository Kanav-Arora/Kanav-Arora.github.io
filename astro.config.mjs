// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrganizationSite = repository?.toLowerCase() === 'kanav-arora.github.io';
const base = process.env.GITHUB_ACTIONS && repository && !isUserOrOrganizationSite ? `/${repository}` : '/';

export default defineConfig({
	site: 'https://kanav-arora.github.io',
	base,
	trailingSlash: 'always',
});
