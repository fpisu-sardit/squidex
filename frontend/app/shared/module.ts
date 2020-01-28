﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MentionModule } from 'angular-mentions';

import { SqxFrameworkModule } from '@app/framework';

import {
    AppFormComponent,
    AppLanguagesService,
    AppMustExistGuard,
    AppsService,
    AppsState,
    AssetComponent,
    AssetDialogComponent,
    AssetFolderComponent,
    AssetFolderFormComponent,
    AssetPathComponent,
    AssetPreviewUrlPipe,
    AssetsDialogState,
    AssetsListComponent,
    AssetsSelectorComponent,
    AssetsService,
    AssetsState,
    AssetUploaderComponent,
    AssetUploaderState,
    AssetUrlPipe,
    AuthInterceptor,
    AuthService,
    AutoSaveService,
    BackupsService,
    BackupsState,
    ClientsService,
    ClientsState,
    CommentComponent,
    CommentsComponent,
    CommentsService,
    ContentMustExistGuard,
    ContentsService,
    ContentsState,
    ContributorsService,
    ContributorsState,
    FileIconPipe,
    FilterComparisonComponent,
    FilterLogicalComponent,
    FilterNodeComponent,
    GeolocationEditorComponent,
    GraphQlService,
    HelpComponent,
    HelpMarkdownPipe,
    HelpService,
    HistoryComponent,
    HistoryListComponent,
    HistoryMessagePipe,
    HistoryService,
    ImageEditorComponent,
    LanguageSelectorComponent,
    LanguagesService,
    LanguagesState,
    LoadAppsGuard,
    LoadLanguagesGuard,
    MarkdownEditorComponent,
    MustBeAuthenticatedGuard,
    MustBeNotAuthenticatedGuard,
    NewsService,
    PatternsService,
    PatternsState,
    PlansService,
    PlansState,
    QueryComponent,
    QueryListComponent,
    QueryPathComponent,
    ReferencesDropdownComponent,
    ReferencesTagsComponent,
    RichEditorComponent,
    RolesService,
    RolesState,
    RuleEventsState,
    RulesService,
    RulesState,
    SavedQueriesComponent,
    SchemaCategoryComponent,
    SchemaMustExistGuard,
    SchemaMustExistPublishedGuard,
    SchemaMustNotBeSingletonGuard,
    SchemasService,
    SchemasState,
    SchemaTagSource,
    SearchFormComponent,
    SortingComponent,
    StockPhotoService,
    TableHeaderComponent,
    TranslationsService,
    UIService,
    UIState,
    UnsetAppGuard,
    UnsetContentGuard,
    UsagesService,
    UserDtoPicture,
    UserIdPicturePipe,
    UserNamePipe,
    UserNameRefPipe,
    UserPicturePipe,
    UserPictureRefPipe,
    UsersProviderService,
    UsersService,
    WorkflowsService,
    WorkflowsState
} from './declarations';

@NgModule({
    imports: [
        DragDropModule,
        MentionModule,
        RouterModule,
        SqxFrameworkModule
    ],
    declarations: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetFolderComponent,
        AssetFolderFormComponent,
        AssetPathComponent,
        AssetPreviewUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetUploaderComponent,
        AssetUrlPipe,
        CommentComponent,
        CommentsComponent,
        FileIconPipe,
        FilterComparisonComponent,
        FilterLogicalComponent,
        FilterNodeComponent,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        ImageEditorComponent,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        QueryComponent,
        QueryListComponent,
        QueryPathComponent,
        ReferencesDropdownComponent,
        ReferencesTagsComponent,
        RichEditorComponent,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SearchFormComponent,
        SortingComponent,
        TableHeaderComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe
    ],
    exports: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetFolderComponent,
        AssetFolderFormComponent,
        AssetPathComponent,
        AssetPreviewUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetUploaderComponent,
        AssetUrlPipe,
        CommentComponent,
        CommentsComponent,
        DragDropModule,
        FileIconPipe,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        QueryListComponent,
        ReferencesDropdownComponent,
        ReferencesTagsComponent,
        RichEditorComponent,
        RouterModule,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SearchFormComponent,
        TableHeaderComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe
    ],
    providers: [
        AssetsDialogState
    ]
})
export class SqxSharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxSharedModule,
            providers: [
                AppLanguagesService,
                AppMustExistGuard,
                AppsService,
                AppsState,
                AssetsService,
                AssetsState,
                AssetUploaderState,
                AuthService,
                AutoSaveService,
                BackupsService,
                BackupsState,
                ClientsService,
                ClientsState,
                CommentsService,
                ContentMustExistGuard,
                ContentsService,
                ContentsState,
                ContributorsService,
                ContributorsState,
                GraphQlService,
                HelpService,
                HistoryService,
                LanguagesService,
                LanguagesState,
                LoadAppsGuard,
                LoadLanguagesGuard,
                MustBeAuthenticatedGuard,
                MustBeNotAuthenticatedGuard,
                NewsService,
                PatternsService,
                PatternsState,
                PlansService,
                PlansState,
                RolesService,
                RolesState,
                RuleEventsState,
                RulesService,
                RulesState,
                SchemaMustExistGuard,
                SchemaMustExistPublishedGuard,
                SchemaMustNotBeSingletonGuard,
                SchemasService,
                SchemasState,
                SchemaTagSource,
                StockPhotoService,
                TranslationsService,
                UIService,
                UIState,
                UnsetAppGuard,
                UnsetContentGuard,
                UsagesService,
                UsersProviderService,
                UsersService,
                WorkflowsService,
                WorkflowsState,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ]
        };
    }
}