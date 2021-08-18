import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app.component'
import {SlideNavigationService} from './common/services/slideNavigation.service';
import {SlideRequiredService} from './common/services/SlideRequired.service';
import {SlideCompletionService} from './common/services/slideCompletion.service';
import {KnowledgeCheckService} from './common/slides/services/knowledgeCheck.service';
import {MenuNavigationService} from './common/services/menuNavigation.service';
import {ScormService} from './common/services/scorm.service';

bootstrap(App,[SlideNavigationService, SlideRequiredService, KnowledgeCheckService, ScormService, SlideCompletionService, MenuNavigationService]);