export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Circle: unknown;
  DateTime: string;
  Dimension: number;
  HexColor: string;
  JSON: {
    nodeType: string;
    data: Record<string, unknown> | undefined;
    value: string | undefined;
    content:
      | Array<{
          nodeType: string;
          data: Record<string, unknown> | undefined;
          value: string | undefined;
          content:
            | Array<{
                nodeType: string;
                data: Record<string, unknown> | undefined;
                value: string | undefined;
                content:
                  | Array<{
                      nodeType: string;
                      data: Record<string, unknown> | undefined;
                      value: string | undefined;
                      content:
                        | Array<{
                            nodeType: string;
                            data: Record<string, unknown> | undefined;
                            value: string | undefined;
                            content: Array<unknown> | undefined;
                          }>
                        | undefined;
                    }>
                  | undefined;
              }>
            | undefined;
        }>
      | undefined;
  };
  Quality: number;
  Rectangle: unknown;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  readonly contentType: Maybe<Scalars['String']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description: Maybe<Scalars['String']>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly linkedFrom: Maybe<AssetLinkingCollections>;
  readonly size: Maybe<Scalars['Int']>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
  transform: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  readonly items: ReadonlyArray<Maybe<Asset>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type AssetFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly contentType: InputMaybe<Scalars['String']>;
  readonly contentType_contains: InputMaybe<Scalars['String']>;
  readonly contentType_exists: InputMaybe<Scalars['Boolean']>;
  readonly contentType_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentType_not: InputMaybe<Scalars['String']>;
  readonly contentType_not_contains: InputMaybe<Scalars['String']>;
  readonly contentType_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly fileName: InputMaybe<Scalars['String']>;
  readonly fileName_contains: InputMaybe<Scalars['String']>;
  readonly fileName_exists: InputMaybe<Scalars['Boolean']>;
  readonly fileName_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly fileName_not: InputMaybe<Scalars['String']>;
  readonly fileName_not_contains: InputMaybe<Scalars['String']>;
  readonly fileName_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly height: InputMaybe<Scalars['Int']>;
  readonly height_exists: InputMaybe<Scalars['Boolean']>;
  readonly height_gt: InputMaybe<Scalars['Int']>;
  readonly height_gte: InputMaybe<Scalars['Int']>;
  readonly height_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly height_lt: InputMaybe<Scalars['Int']>;
  readonly height_lte: InputMaybe<Scalars['Int']>;
  readonly height_not: InputMaybe<Scalars['Int']>;
  readonly height_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly size: InputMaybe<Scalars['Int']>;
  readonly size_exists: InputMaybe<Scalars['Boolean']>;
  readonly size_gt: InputMaybe<Scalars['Int']>;
  readonly size_gte: InputMaybe<Scalars['Int']>;
  readonly size_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly size_lt: InputMaybe<Scalars['Int']>;
  readonly size_lte: InputMaybe<Scalars['Int']>;
  readonly size_not: InputMaybe<Scalars['Int']>;
  readonly size_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url: InputMaybe<Scalars['String']>;
  readonly url_contains: InputMaybe<Scalars['String']>;
  readonly url_exists: InputMaybe<Scalars['Boolean']>;
  readonly url_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url_not: InputMaybe<Scalars['String']>;
  readonly url_not_contains: InputMaybe<Scalars['String']>;
  readonly url_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly width: InputMaybe<Scalars['Int']>;
  readonly width_exists: InputMaybe<Scalars['Boolean']>;
  readonly width_gt: InputMaybe<Scalars['Int']>;
  readonly width_gte: InputMaybe<Scalars['Int']>;
  readonly width_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly width_lt: InputMaybe<Scalars['Int']>;
  readonly width_lte: InputMaybe<Scalars['Int']>;
  readonly width_not: InputMaybe<Scalars['Int']>;
  readonly width_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  readonly certificationBadgeCollection: Maybe<CertificationBadgeCollection>;
  readonly contentTypeLocationCollection: Maybe<ContentTypeLocationCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
  readonly introBlockCollection: Maybe<IntroBlockCollection>;
  readonly projectCollection: Maybe<ProjectCollection>;
};

export type AssetLinkingCollectionsCertificationBadgeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsContentTypeLocationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsIntroBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadge = Entry & {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description: Maybe<Scalars['String']>;
  readonly level: Maybe<Scalars['String']>;
  readonly link: Maybe<Link>;
  readonly linkedFrom: Maybe<CertificationBadgeLinkingCollections>;
  readonly org: Maybe<CertificationOrg>;
  readonly sys: Sys;
  readonly thumbnail: Maybe<Asset>;
  readonly title: Maybe<Scalars['String']>;
  readonly visible: Maybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeLevelArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeLinkArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeOrgArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeThumbnailArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationBadge) */
export type CertificationBadgeVisibleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type CertificationBadgeCollection = {
  readonly items: ReadonlyArray<Maybe<CertificationBadge>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type CertificationBadgeFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<CertificationBadgeFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<CertificationBadgeFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly level: InputMaybe<Scalars['String']>;
  readonly level_contains: InputMaybe<Scalars['String']>;
  readonly level_exists: InputMaybe<Scalars['Boolean']>;
  readonly level_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly level_not: InputMaybe<Scalars['String']>;
  readonly level_not_contains: InputMaybe<Scalars['String']>;
  readonly level_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly link: InputMaybe<CfLinkNestedFilter>;
  readonly link_exists: InputMaybe<Scalars['Boolean']>;
  readonly org: InputMaybe<CfCertificationOrgNestedFilter>;
  readonly org_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly thumbnail_exists: InputMaybe<Scalars['Boolean']>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly visible: InputMaybe<Scalars['Boolean']>;
  readonly visible_exists: InputMaybe<Scalars['Boolean']>;
  readonly visible_not: InputMaybe<Scalars['Boolean']>;
};

export type CertificationBadgeLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type CertificationBadgeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CertificationBadgeOrder =
  | 'level_ASC'
  | 'level_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'visible_ASC'
  | 'visible_DESC';

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationOrg) */
export type CertificationOrg = Entry & {
  readonly abbreviation: Maybe<Scalars['String']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly link: Maybe<Entry>;
  readonly linkedFrom: Maybe<CertificationOrgLinkingCollections>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationOrg) */
export type CertificationOrgAbbreviationArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationOrg) */
export type CertificationOrgLinkArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationOrg) */
export type CertificationOrgLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/certificationOrg) */
export type CertificationOrgTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type CertificationOrgCollection = {
  readonly items: ReadonlyArray<Maybe<CertificationOrg>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type CertificationOrgFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<CertificationOrgFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<CertificationOrgFilter>>>;
  readonly abbreviation: InputMaybe<Scalars['String']>;
  readonly abbreviation_contains: InputMaybe<Scalars['String']>;
  readonly abbreviation_exists: InputMaybe<Scalars['Boolean']>;
  readonly abbreviation_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly abbreviation_not: InputMaybe<Scalars['String']>;
  readonly abbreviation_not_contains: InputMaybe<Scalars['String']>;
  readonly abbreviation_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly link_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type CertificationOrgLinkingCollections = {
  readonly certificationBadgeCollection: Maybe<CertificationBadgeCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
};

export type CertificationOrgLinkingCollectionsCertificationBadgeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CertificationOrgLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CertificationOrgOrder =
  | 'abbreviation_ASC'
  | 'abbreviation_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocation = Entry & {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly image: Maybe<Asset>;
  readonly initialZoom: Maybe<Scalars['Float']>;
  readonly linkedFrom: Maybe<ContentTypeLocationLinkingCollections>;
  readonly point: Maybe<Location>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
  readonly zoomLevels: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationImageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationInitialZoomArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationPointArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/location) */
export type ContentTypeLocationZoomLevelsArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ContentTypeLocationCollection = {
  readonly items: ReadonlyArray<Maybe<ContentTypeLocation>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type ContentTypeLocationFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeLocationFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeLocationFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly image_exists: InputMaybe<Scalars['Boolean']>;
  readonly initialZoom: InputMaybe<Scalars['Float']>;
  readonly initialZoom_exists: InputMaybe<Scalars['Boolean']>;
  readonly initialZoom_gt: InputMaybe<Scalars['Float']>;
  readonly initialZoom_gte: InputMaybe<Scalars['Float']>;
  readonly initialZoom_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly initialZoom_lt: InputMaybe<Scalars['Float']>;
  readonly initialZoom_lte: InputMaybe<Scalars['Float']>;
  readonly initialZoom_not: InputMaybe<Scalars['Float']>;
  readonly initialZoom_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly point_exists: InputMaybe<Scalars['Boolean']>;
  readonly point_within_circle: InputMaybe<Scalars['Circle']>;
  readonly point_within_rectangle: InputMaybe<Scalars['Rectangle']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly zoomLevels_contains_all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly zoomLevels_contains_none: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly zoomLevels_contains_some: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly zoomLevels_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentTypeLocationLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type ContentTypeLocationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentTypeLocationOrder =
  | 'initialZoom_ASC'
  | 'initialZoom_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type ContentfulMetadata = {
  readonly tags: ReadonlyArray<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  readonly tags: InputMaybe<ContentfulMetadataTagsFilter>;
  readonly tags_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  readonly id_contains_all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_contains_none: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_contains_some: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

export type Entry = {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly sys: Sys;
};

export type EntryCollection = {
  readonly items: ReadonlyArray<Maybe<Entry>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type EntryFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly sys: InputMaybe<SysFilter>;
};

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type ImageFormat =
  | 'AVIF'
  /** JPG image format. */
  | 'JPG'
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  | 'JPG_PROGRESSIVE'
  /** PNG image format */
  | 'PNG'
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  | 'PNG8'
  /** WebP image format. */
  | 'WEBP';

export type ImageResizeFocus =
  /** Focus the resizing on the bottom. */
  | 'BOTTOM'
  /** Focus the resizing on the bottom left. */
  | 'BOTTOM_LEFT'
  /** Focus the resizing on the bottom right. */
  | 'BOTTOM_RIGHT'
  /** Focus the resizing on the center. */
  | 'CENTER'
  /** Focus the resizing on the largest face. */
  | 'FACE'
  /** Focus the resizing on the area containing all the faces. */
  | 'FACES'
  /** Focus the resizing on the left. */
  | 'LEFT'
  /** Focus the resizing on the right. */
  | 'RIGHT'
  /** Focus the resizing on the top. */
  | 'TOP'
  /** Focus the resizing on the top left. */
  | 'TOP_LEFT'
  /** Focus the resizing on the top right. */
  | 'TOP_RIGHT';

export type ImageResizeStrategy =
  /** Crops a part of the original image to fit into the specified dimensions. */
  | 'CROP'
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  | 'FILL'
  /** Resizes the image to fit into the specified dimensions. */
  | 'FIT'
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  | 'PAD'
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  | 'SCALE'
  /** Creates a thumbnail from the image. */
  | 'THUMB';

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  readonly backgroundColor: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  readonly cornerRadius: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  readonly format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  readonly height: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  readonly quality: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  readonly resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  readonly resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  readonly width: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/introBlock) */
export type IntroBlock = Entry & {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly headshot: Maybe<Asset>;
  readonly linkedFrom: Maybe<IntroBlockLinkingCollections>;
  readonly sys: Sys;
  readonly textBlock: Maybe<IntroBlockTextBlock>;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/introBlock) */
export type IntroBlockHeadshotArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/introBlock) */
export type IntroBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/introBlock) */
export type IntroBlockTextBlockArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/introBlock) */
export type IntroBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type IntroBlockCollection = {
  readonly items: ReadonlyArray<Maybe<IntroBlock>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type IntroBlockFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<IntroBlockFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<IntroBlockFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly headshot_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly textBlock_contains: InputMaybe<Scalars['String']>;
  readonly textBlock_exists: InputMaybe<Scalars['Boolean']>;
  readonly textBlock_not_contains: InputMaybe<Scalars['String']>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type IntroBlockLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type IntroBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type IntroBlockOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type IntroBlockTextBlock = {
  readonly json: Scalars['JSON'];
  readonly links: IntroBlockTextBlockLinks;
};

export type IntroBlockTextBlockAssets = {
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type IntroBlockTextBlockEntries = {
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type IntroBlockTextBlockLinks = {
  readonly assets: IntroBlockTextBlockAssets;
  readonly entries: IntroBlockTextBlockEntries;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/link) */
export type Link = Entry & {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly icon: Maybe<Scalars['String']>;
  readonly linkedFrom: Maybe<LinkLinkingCollections>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/link) */
export type LinkIconArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/link) */
export type LinkTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/link) */
export type LinkUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type LinkCollection = {
  readonly items: ReadonlyArray<Maybe<Link>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type LinkFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<LinkFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<LinkFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly icon: InputMaybe<Scalars['String']>;
  readonly icon_contains: InputMaybe<Scalars['String']>;
  readonly icon_exists: InputMaybe<Scalars['Boolean']>;
  readonly icon_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly icon_not: InputMaybe<Scalars['String']>;
  readonly icon_not_contains: InputMaybe<Scalars['String']>;
  readonly icon_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url: InputMaybe<Scalars['String']>;
  readonly url_contains: InputMaybe<Scalars['String']>;
  readonly url_exists: InputMaybe<Scalars['Boolean']>;
  readonly url_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url_not: InputMaybe<Scalars['String']>;
  readonly url_not_contains: InputMaybe<Scalars['String']>;
  readonly url_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LinkLinkingCollections = {
  readonly certificationBadgeCollection: Maybe<CertificationBadgeCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
  readonly projectCollection: Maybe<ProjectCollection>;
};

export type LinkLinkingCollectionsCertificationBadgeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkOrder =
  | 'icon_ASC'
  | 'icon_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'url_ASC'
  | 'url_DESC';

export type Location = {
  readonly lat: Maybe<Scalars['Float']>;
  readonly lon: Maybe<Scalars['Float']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type Project = Entry & {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly creationDate: Maybe<Scalars['DateTime']>;
  readonly description: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly link: Maybe<Link>;
  readonly linkedFrom: Maybe<ProjectLinkingCollections>;
  readonly sys: Sys;
  readonly thumbnail: Maybe<Asset>;
  readonly title: Maybe<Scalars['String']>;
  readonly visible: Maybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectCreationDateArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectLayoutArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectLinkArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectThumbnailArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/project) */
export type ProjectVisibleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ProjectCollection = {
  readonly items: ReadonlyArray<Maybe<Project>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type ProjectFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<ProjectFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<ProjectFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly creationDate: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_exists: InputMaybe<Scalars['Boolean']>;
  readonly creationDate_gt: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_gte: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly creationDate_lt: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_lte: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_not: InputMaybe<Scalars['DateTime']>;
  readonly creationDate_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly layout: InputMaybe<Scalars['String']>;
  readonly layout_contains: InputMaybe<Scalars['String']>;
  readonly layout_exists: InputMaybe<Scalars['Boolean']>;
  readonly layout_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly layout_not: InputMaybe<Scalars['String']>;
  readonly layout_not_contains: InputMaybe<Scalars['String']>;
  readonly layout_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly link: InputMaybe<CfLinkNestedFilter>;
  readonly link_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly thumbnail_exists: InputMaybe<Scalars['Boolean']>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly visible: InputMaybe<Scalars['Boolean']>;
  readonly visible_exists: InputMaybe<Scalars['Boolean']>;
  readonly visible_not: InputMaybe<Scalars['Boolean']>;
};

export type ProjectLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ProjectOrder =
  | 'creationDate_ASC'
  | 'creationDate_DESC'
  | 'layout_ASC'
  | 'layout_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'visible_ASC'
  | 'visible_DESC';

export type Query = {
  readonly asset: Maybe<Asset>;
  readonly assetCollection: Maybe<AssetCollection>;
  readonly certificationBadge: Maybe<CertificationBadge>;
  readonly certificationBadgeCollection: Maybe<CertificationBadgeCollection>;
  readonly certificationOrg: Maybe<CertificationOrg>;
  readonly certificationOrgCollection: Maybe<CertificationOrgCollection>;
  readonly contentTypeLocation: Maybe<ContentTypeLocation>;
  readonly contentTypeLocationCollection: Maybe<ContentTypeLocationCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
  readonly introBlock: Maybe<IntroBlock>;
  readonly introBlockCollection: Maybe<IntroBlockCollection>;
  readonly link: Maybe<Link>;
  readonly linkCollection: Maybe<LinkCollection>;
  readonly project: Maybe<Project>;
  readonly projectCollection: Maybe<ProjectCollection>;
  readonly section: Maybe<Section>;
  readonly sectionCollection: Maybe<SectionCollection>;
  readonly textBlock: Maybe<TextBlock>;
  readonly textBlockCollection: Maybe<TextBlockCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetFilter>;
};

export type QueryCertificationBadgeArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryCertificationBadgeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<CertificationBadgeOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CertificationBadgeFilter>;
};

export type QueryCertificationOrgArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryCertificationOrgCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<CertificationOrgOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CertificationOrgFilter>;
};

export type QueryContentTypeLocationArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryContentTypeLocationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeLocationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ContentTypeLocationFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EntryFilter>;
};

export type QueryIntroBlockArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryIntroBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<IntroBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IntroBlockFilter>;
};

export type QueryLinkArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<LinkOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<LinkFilter>;
};

export type QueryProjectArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<ProjectOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectFilter>;
};

export type QuerySectionArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<SectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SectionFilter>;
};

export type QueryTextBlockArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<TextBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TextBlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/section) */
export type Section = Entry & {
  readonly contentCollection: Maybe<SectionContentCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly linkedFrom: Maybe<SectionLinkingCollections>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/section) */
export type SectionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/section) */
export type SectionTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type SectionCollection = {
  readonly items: ReadonlyArray<Maybe<Section>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type SectionContentCollection = {
  readonly items: ReadonlyArray<Maybe<Entry>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type SectionFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<SectionFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<SectionFilter>>>;
  readonly contentCollection_exists: InputMaybe<Scalars['Boolean']>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SectionOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type Sys = {
  readonly environmentId: Scalars['String'];
  readonly firstPublishedAt: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly publishedVersion: Maybe<Scalars['Int']>;
  readonly spaceId: Scalars['String'];
};

export type SysFilter = {
  readonly firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_exists: InputMaybe<Scalars['Boolean']>;
  readonly firstPublishedAt_gt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_gte: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly firstPublishedAt_lt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_lte: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly id: InputMaybe<Scalars['String']>;
  readonly id_contains: InputMaybe<Scalars['String']>;
  readonly id_exists: InputMaybe<Scalars['Boolean']>;
  readonly id_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_not: InputMaybe<Scalars['String']>;
  readonly id_not_contains: InputMaybe<Scalars['String']>;
  readonly id_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_exists: InputMaybe<Scalars['Boolean']>;
  readonly publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedVersion: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_exists: InputMaybe<Scalars['Boolean']>;
  readonly publishedVersion_gt: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_gte: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly publishedVersion_lt: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_lte: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/textBlock) */
export type TextBlock = Entry & {
  readonly content: Maybe<TextBlockContent>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly linkedFrom: Maybe<TextBlockLinkingCollections>;
  readonly sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/textBlock) */
export type TextBlockContentArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/dmq2gxjoz3y8/content_types/textBlock) */
export type TextBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type TextBlockCollection = {
  readonly items: ReadonlyArray<Maybe<TextBlock>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type TextBlockContent = {
  readonly json: Scalars['JSON'];
  readonly links: TextBlockContentLinks;
};

export type TextBlockContentAssets = {
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type TextBlockContentEntries = {
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type TextBlockContentLinks = {
  readonly assets: TextBlockContentAssets;
  readonly entries: TextBlockContentEntries;
};

export type TextBlockFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<TextBlockFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<TextBlockFilter>>>;
  readonly content_contains: InputMaybe<Scalars['String']>;
  readonly content_exists: InputMaybe<Scalars['Boolean']>;
  readonly content_not_contains: InputMaybe<Scalars['String']>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly sys: InputMaybe<SysFilter>;
};

export type TextBlockLinkingCollections = {
  readonly entryCollection: Maybe<EntryCollection>;
};

export type TextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextBlockOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type CfCertificationOrgNestedFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<CfCertificationOrgNestedFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<CfCertificationOrgNestedFilter>>>;
  readonly abbreviation: InputMaybe<Scalars['String']>;
  readonly abbreviation_contains: InputMaybe<Scalars['String']>;
  readonly abbreviation_exists: InputMaybe<Scalars['Boolean']>;
  readonly abbreviation_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly abbreviation_not: InputMaybe<Scalars['String']>;
  readonly abbreviation_not_contains: InputMaybe<Scalars['String']>;
  readonly abbreviation_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly link_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type CfLinkNestedFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<CfLinkNestedFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<CfLinkNestedFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly icon: InputMaybe<Scalars['String']>;
  readonly icon_contains: InputMaybe<Scalars['String']>;
  readonly icon_exists: InputMaybe<Scalars['Boolean']>;
  readonly icon_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly icon_not: InputMaybe<Scalars['String']>;
  readonly icon_not_contains: InputMaybe<Scalars['String']>;
  readonly icon_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url: InputMaybe<Scalars['String']>;
  readonly url_contains: InputMaybe<Scalars['String']>;
  readonly url_exists: InputMaybe<Scalars['Boolean']>;
  readonly url_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url_not: InputMaybe<Scalars['String']>;
  readonly url_not_contains: InputMaybe<Scalars['String']>;
  readonly url_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};
