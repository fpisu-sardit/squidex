﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System;
using System.Threading.Tasks;
using FakeItEasy;
using Orleans;
using Xunit;

namespace Squidex.Domain.Apps.Entities.Schemas.Indexes
{
    public class SchemaIndexCleanerTests
    {
        private readonly IGrainFactory grainFactory = A.Fake<IGrainFactory>();
        private readonly ISchemasByAppIndex index = A.Fake<ISchemasByAppIndex>();
        private readonly Guid appId = Guid.NewGuid();
        private readonly SchemaIndexCleaner sut;

        public SchemaIndexCleanerTests()
        {
            A.CallTo(() => grainFactory.GetGrain<ISchemasByAppIndex>(appId, null))
                .Returns(index);

            sut = new SchemaIndexCleaner(grainFactory);
        }

        [Fact]
        public async Task Should_forward_to_index()
        {
            await sut.ClearAsync(appId);

            A.CallTo(() => index.ClearAsync())
                .MustHaveHappened();
        }
    }
}
