import { MainCity, CityContext } from '~/data/MainCity.js';
import { LanguageSetting, languageContext } from '~/data/LanguageSetting.js';
import { Temp, tempContext } from '~/data/temp';
import { PageShow } from '~/data/pageShow';

function Data({ children }) {
    return (
        <MainCity>
            <Temp>
                <PageShow>
                    <LanguageSetting>{children}</LanguageSetting>
                </PageShow>
            </Temp>
        </MainCity>
    );
}

export default Data;
