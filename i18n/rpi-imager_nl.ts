<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl_NL">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="166"/>
        <source>Error writing to storage</source>
        <translation>Fout bij schrijven naar opslag</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="188"/>
        <location filename="../downloadextractthread.cpp" line="348"/>
        <source>Error extracting archive: %1</source>
        <translation>Fout bij uitpakken archiefbestand: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="234"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Fout bij mounten FAT32 partitie</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="244"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Besturingssysteem heeft FAT32 partitie niet gemount</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="267"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Fout bij openen map &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="126"/>
        <source>Error running diskpart: %1</source>
        <translation>Fout bij uitvoeren diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="147"/>
        <source>Error removing existing partitions</source>
        <translation>Fout bij verwijderen bestaande partities</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="174"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Fout bij uitvoeren authopen: &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="193"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Fout bij openen opslagapparaat &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="207"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Fout bij wissen MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="219"/>
        <source>Write error while trying to zero out last part of card.
Card could be advertising wrong capacity (possible counterfeit)</source>
        <translation>Fout bij wissen laatste deel van de SD kaart.
Kaart geeft mogelijk onjuiste capaciteit aan (mogelijk counterfeit)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="537"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Fout bij schrijven naar opslag (tijdens flushen)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="543"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Fout bij schrijven naar opslag (tijdens fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="560"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download corrupt. Hash komt niet overeen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="590"/>
        <source>Error writing first block (partition table)</source>
        <translation>Fout bij schrijven naar eerste deel van kaart (partitie tabel)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="642"/>
        <source>Error reading from storage.
SD card may be broken.</source>
        <translation>Fout bij lezen van SD kaart. Kaart is mogelijk defect.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="661"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verificatie mislukt. De gegevens die op de SD kaart staan wijken af van wat er naar geschreven is.</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Fout bij partitioneren: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Fout bij starten fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Fout bij uitvoeren fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Fout bij vaststellen nieuwe letter van schijfstation</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Ongeldig device: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Fout bij formatteren (via udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Fout bij starten sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="196"/>
        <source>Error starting mkfs.fat</source>
        <translation>Fout bij starten mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="206"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Fout bij uitvoeren mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="213"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatteren is niet geimplementeerd op dit besturingssysteem</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="170"/>
        <source>Storage capacity is not large enough.
Needs to be at least %1 GB</source>
        <translation>Opslagcapaciteit niet groot genoeg.
Deze dient minimaal %1 GB te zijn</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="176"/>
        <source>Input file is not a valid disk image.
File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Invoerbestand is geen disk image.
Bestandsgrootte %1 bytes is geen veelvoud van 512 bytes.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="200"/>
        <source>Downloading and writing image</source>
        <translation>Downloaden en schrijven van image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="403"/>
        <source>Select image</source>
        <translation>Selecteer image</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="38"/>
        <source>Error opening image file</source>
        <translation>Fout bij openen image bestand</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="96"/>
        <source>NO</source>
        <translation>Nee</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="108"/>
        <source>YES</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="120"/>
        <source>CONTINUE</source>
        <translation>VERDER GAAN</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="111"/>
        <source>Internal SD card reader</source>
        <translation>Interne SD kaart lezer</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="24"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="719"/>
        <source>Are you sure you want to quit?</source>
        <translation>Weet u zeker dat u wilt afsluiten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="720"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager is nog niet klaar.&lt;br&gt;Weet u zeker dat u wilt afsluiten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="91"/>
        <location filename="../main.qml" line="300"/>
        <source>Operating System</source>
        <translation>Besturingssysteem</translation>
    </message>
    <message>
        <location filename="../main.qml" line="103"/>
        <source>CHOOSE OS</source>
        <translation>SELECTEER OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="133"/>
        <location filename="../main.qml" line="575"/>
        <source>SD Card</source>
        <translation>SD kaart</translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <location filename="../main.qml" line="859"/>
        <source>CHOOSE SD CARD</source>
        <translation>SELECTEER SD KAART</translation>
    </message>
    <message>
        <location filename="../main.qml" line="175"/>
        <source>WRITE</source>
        <translation>SCHRIJF</translation>
    </message>
    <message>
        <location filename="../main.qml" line="737"/>
        <location filename="../main.qml" line="804"/>
        <source>Writing... %1%</source>
        <translation>Schrijven... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="219"/>
        <source>CANCEL WRITE</source>
        <translation>Annuleer schrijven</translation>
    </message>
    <message>
        <location filename="../main.qml" line="121"/>
        <source>Select this button to change the operating system</source>
        <translation>Kies deze knop om een besturingssysteem te kiezen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="159"/>
        <source>Select this button to change the destination SD card</source>
        <translation>Kies deze knop om de SD kaart te kiezen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="180"/>
        <source>Select this button to start writing the image</source>
        <translation>Kies deze knop om te beginnen met het schrijven van de image</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <location filename="../main.qml" line="801"/>
        <source>Cancelling...</source>
        <translation>Annuleren...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="233"/>
        <source>CANCEL VERIFY</source>
        <translation>ANNULEER VERIFICATIE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="236"/>
        <location filename="../main.qml" line="824"/>
        <location filename="../main.qml" line="877"/>
        <source>Finalizing...</source>
        <translation>Afronden...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="373"/>
        <location filename="../main.qml" line="853"/>
        <source>Erase</source>
        <translation>Wissen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="374"/>
        <source>Format card as FAT32</source>
        <translation>Formatteer kaart als FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="381"/>
        <source>Use custom</source>
        <translation>Gebruik eigen bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="382"/>
        <source>Select a custom .img from your computer</source>
        <translation>Selecteer een eigen .img bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="468"/>
        <source>Local file</source>
        <translation>Lokaal bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="731"/>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <location filename="../main.qml" line="750"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Alle bestaande gegevens op &apos;%1&apos; zullen verwijderd worden.&lt;br&gt;Weet u zeker dat u door wilt gaan?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="854"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; is gewist&lt;br&gt;&lt;br&gt;U kunt nu de SD kaart uit de lezer halen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="884"/>
        <location filename="../main.qml" line="926"/>
        <source>Error parsing os_list.json</source>
        <translation>Fout bij parsen os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="964"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Sluit eerst een USB stick met images aan.&lt;br&gt;De images moeten in de hoofdmap van de USB stick staan.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="405"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
    <message>
        <location filename="../main.qml" line="406"/>
        <source>Go back to main menu</source>
        <translation>Terug naar hoofdmenu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="463"/>
        <source>Released: %1</source>
        <translation>Release datum: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="466"/>
        <source>Cached on your computer</source>
        <translation>Opgeslagen op computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="470"/>
        <source>Online - %1 GB download</source>
        <translation>Online %1 GB download</translation>
    </message>
    <message>
        <location filename="../main.qml" line="628"/>
        <location filename="../main.qml" line="676"/>
        <source>Mounted as %1</source>
        <translation>Mounted op %1</translation>
    </message>
    <message>
        <source>QUIT APP</source>
        <translation type="vanished">AFSLUITEN</translation>
    </message>
    <message>
        <source>CONTINUE</source>
        <translation type="vanished">VERDER GAAN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="783"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Fout bij downloaden van lijst met besturingssystemen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="827"/>
        <source>Verifying... %1%</source>
        <translation>Verifiëren... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="845"/>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <location filename="../main.qml" line="852"/>
        <source>Write Successful</source>
        <translation>Klaar met schrijven</translation>
    </message>
    <message>
        <source>&lt;b&gt;%2&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation type="vanished">&lt;b&gt;%2&lt;/b&gt; is gewist&lt;br&gt;&lt;br&gt;U kunt nu de SD kaart uit de lezer halen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="856"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; is geschreven naar &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;U kunt nu de SD kaart uit de lezer halen</translation>
    </message>
</context>
</TS>
