import schemas from '@/sanity/schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
	projectId: 'cue5e190',
	dataset: 'production',
	title: 'Gaming-team-platform',
	apiVersion: '2023-10-13',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
